import { Request, Response } from 'express';
import { UpdateQuestionService } from '../services/UpdateQuestionService';

class UpdateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      description,
      points,
      responseQuestion,
      optionA,
      optionB,
      optionC,
      optionD,
      optionE,
      themeId,
      levelId,
    } = request.body;

    const updateQuestionService = new UpdateQuestionService();

    const serviceResponse = await updateQuestionService.execute({
      id,
      description,
      points,
      responseQuestion,
      optionA,
      optionB,
      optionC,
      optionD,
      optionE,
      themeId,
      levelId,
    });
    return response.status(201).json(serviceResponse);
  }
}

export { UpdateQuestionController };
1;
