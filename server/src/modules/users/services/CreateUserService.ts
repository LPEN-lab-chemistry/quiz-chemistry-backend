import prismaClient from '../../../prismaClient';
import { hash } from 'bcryptjs';
import AppError from '../../../shared/errors/AppError';
interface UserRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
  score: number;
}

class CreateUserService {
  async execute({
    name,
    email,
    password,
    confirmPassword,
  }: UserRequest): Promise<UserResponse> {
    if (confirmPassword !== password) {
      throw new AppError(
        'The confirm password field must match the entered password.',
      );
    }

    if (!email) {
      throw new AppError('Invalid e-mail.');
    }
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }
    const passwordHash = await hash(password, 8);
    const userSaved = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        score: 0,
      },
      select: {
        id: true,
        name: true,
        email: true,
        score: true,
      },
    });
    return userSaved;
  }
}

export { CreateUserService };
