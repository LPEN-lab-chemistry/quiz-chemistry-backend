import { Request, Response } from 'express';
import { FindLevelByIdService } from '../services/FindLevelByIdService';

class FindLevelByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.query.id as string, 10);

    const findLevelByIdService = new FindLevelByIdService();

    const serviceResponse = await findLevelByIdService.execute({
      id,
    });

    return response.json(serviceResponse);
  }
}

export { FindLevelByIdController };
