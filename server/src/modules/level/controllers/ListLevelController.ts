import { Request, Response } from 'express';
import { ListLevelService } from '../services/ListLevelService';

class ListLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const queryName = request.query.queryName as string;

    const listLevelService = new ListLevelService();

    const listResponse = await listLevelService.execute({
      queryName,
    });

    return response.json(listResponse);
  }
}

export { ListLevelController };
