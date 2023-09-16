import { Request, Response } from 'express';
import { ListThemeService } from '../services/ListThemeService';

class ListThemeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const queryName = request.query.queryName as string;

    const listThemeService = new ListThemeService();

    const listResponse = await listThemeService.execute({
      queryName,
    });

    return response.json(listResponse);
  }
}

export { ListThemeController };
