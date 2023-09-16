import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, confirmPassword } = request.body;

    const createUserService = new CreateUserService();

    const serviceResponse = await createUserService.execute({
      name,
      email,
      password,
      confirmPassword,
    });

    return response.json(serviceResponse);
  }
}

export { CreateUserController };
