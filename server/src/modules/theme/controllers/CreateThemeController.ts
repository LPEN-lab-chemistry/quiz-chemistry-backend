import { Request, Response } from 'express';
import { CreateThemeService } from '../services/CreateThemeService';

class CreateThemeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const themes = request.body;

    const createThemeService = new CreateThemeService();

    const serviceResponse = await createThemeService.execute({
      themes,
    });
    return response.status(201).json(serviceResponse);
  }
}

export { CreateThemeController };
