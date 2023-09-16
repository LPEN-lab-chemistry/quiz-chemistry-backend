import { Request, Response } from 'express';
import { DeleteLevelService } from '../services/DeleteLevelService';

class DeleteLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.query.id as string, 10);

    const deleteLevelService = new DeleteLevelService();

    const serviceResponse = await deleteLevelService.execute({
      id,
    });

    return response.json(serviceResponse);
  }
}

export { DeleteLevelController };
