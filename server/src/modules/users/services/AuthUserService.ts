import AppError from '../../../shared/errors/AppError';
import prismaClient from '../../../prismaClient';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  id: string;
  name: string;
  email: string;
  token: string;
  score: number;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest): Promise<AuthResponse> {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new AppError('User/password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('User/password incorrect');
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
        score: user.score,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      },
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
      score: user.score,
    };
  }
}

export { AuthUserService };
