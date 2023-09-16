import { Request, Response } from 'express';
import { CreateQuestionService } from '../services/CreateQuestionService';

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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

    const createQuestionService = new CreateQuestionService();

    const serviceResponse = await createQuestionService.execute({
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

export { CreateQuestionController };
1;
