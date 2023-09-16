import { Request, Response } from 'express';
import { ListThemeService } from '../services/ListThemeService';

class ListThemeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const queryName = request.query.queryName as string;
    const size = parseInt(request.query.size as string, 10);
    const page = parseInt(request.query.page as string, 10);

    const listThemeService = new ListThemeService();

    const listResponse = await listThemeService.execute({
      queryName,
      size,
      page,
    });

    return response.json(listResponse);
  }
}

export { ListThemeController };
