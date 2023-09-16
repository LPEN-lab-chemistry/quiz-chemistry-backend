import { Request, Response } from 'express';
import { ListQuestionService } from '../services/ListQuestionService';

class ListQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const queryDescription = request.query.query as string;
    const size = parseInt(request.query.size as string, 10);
    const page = parseInt(request.query.page as string, 10);

    const listQuestionService = new ListQuestionService();

    const serviceResponse = await listQuestionService.execute({
      queryDescription,
      size,
      page,
    });

    return response.json(serviceResponse);
  }
}

export { ListQuestionController };
