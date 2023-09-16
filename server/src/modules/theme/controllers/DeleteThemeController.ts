import { Request, Response } from 'express';
import { DeleteThemeService } from '../services/DeleteThemeService';

class DeleteThemeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.query.id as string, 10);

    const deleteThemeService = new DeleteThemeService();

    const serviceResponse = await deleteThemeService.execute({
      id,
    });

    return response.json(serviceResponse);
  }
}

export { DeleteThemeController };
