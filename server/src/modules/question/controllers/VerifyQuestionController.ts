import { Request, Response } from 'express';

import { VerifyQuestionService } from '../services/VerifyQuestionService';

class VerifyQuestionController {
  async handle(request: Request, response: Response) {
    const questionId = parseInt(request.query.questionId as string, 10);
    const optionSelected = request.query.optionSelected as string;
    const userId = request.query.userId as string;

    const verifyQuestionService = new VerifyQuestionService();

    const serviceResponse = await verifyQuestionService.execute({
      questionId,
      optionSelected,
      userId,
    });

    return response.json(serviceResponse);
  }
}

export { VerifyQuestionController };
