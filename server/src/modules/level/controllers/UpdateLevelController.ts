import { Request, Response } from 'express';
import { UpdateLevelService } from '../services/UpdateLevelService';

class UpdateLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const name = request.body.name;
    const id = parseInt(request.body.id as string, 10);

    const updateLevelService = new UpdateLevelService();

    const serviceResponse = await updateLevelService.execute({
      id,
      name,
    });

    return response.json(serviceResponse);
  }
}

export { UpdateLevelController };
