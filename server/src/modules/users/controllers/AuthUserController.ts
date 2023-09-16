import { Request, Response } from 'express';
import { AuthUserService } from '../services/AuthUserService';

class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      email,
      password,
    });

    return response.json(auth);
  }
}

export { AuthUserController };
