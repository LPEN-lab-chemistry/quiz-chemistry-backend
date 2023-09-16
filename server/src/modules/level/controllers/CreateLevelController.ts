import { Request, Response } from 'express';
import { CreateLevelService } from '../services/CreateLevelService';

class CreateLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const levels = request.body;

    const createLevelService = new CreateLevelService();

    const serviceResponse = await createLevelService.execute({
      levels,
    });
    return response.status(201).json(serviceResponse);
  }
}

export { CreateLevelController };
