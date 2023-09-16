import { Request, Response } from 'express';
import { ListQuestionByLevelIdService } from '../services/ListQuestionByLevelIdService';

class ListQuestionByLevelIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const levelId = parseInt(request.query.levelId as string, 10);
    const size = parseInt(request.query.size as string, 10);
    const page = parseInt(request.query.page as string, 10);

    const listQuestionByLevelIdService = new ListQuestionByLevelIdService();

    const serviceResponse = await listQuestionByLevelIdService.execute({
      levelId,
      size,
      page,
    });

    return response.json(serviceResponse);
  }
}

export { ListQuestionByLevelIdController };
