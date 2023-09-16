import { Request, Response } from 'express';
import { GetScoreService } from '../services/GetScoreService';

class GetScoreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.query.userId as string;

    const getScoreService = new GetScoreService();

    const serviceResponse = await getScoreService.execute({
      userId,
    });

    return response.json(serviceResponse);
  }
}

export { GetScoreController };
