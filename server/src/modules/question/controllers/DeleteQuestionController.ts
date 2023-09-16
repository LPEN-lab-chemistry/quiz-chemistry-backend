import { Request, Response } from 'express';
import { DeleteQuestionService } from '../services/DeleteQuestionService';
class DeleteQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.query.id as string, 10);

    const deleteQuestionService = new DeleteQuestionService();

    const serviceResponse = await deleteQuestionService.execute({
      id,
    });

    return response.json(serviceResponse);
  }
}

export { DeleteQuestionController };
