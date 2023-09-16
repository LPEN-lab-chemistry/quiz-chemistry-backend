import { Request, Response } from 'express';
import { UpdateThemeService } from '../services/UpdateThemeService';

class UpdateThemeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const name = request.body.name;
    const id = parseInt(request.body.id as string, 10);

    const updateThemeService = new UpdateThemeService();

    const serviceResponse = await updateThemeService.execute({
      id,
      name,
    });

    return response.json(serviceResponse);
  }
}

export { UpdateThemeController };
