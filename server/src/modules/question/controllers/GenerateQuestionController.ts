import { Request, Response } from 'express';

import { GenerateQuestionService } from '../services/GenerateQuestionService';

class GenerateQuestionController {
  async handle(request: Request, response: Response) {
    const levelId = parseInt(request.query.levelId as string, 10);
    const themeId = parseInt(request.query.themeId as string, 10);
    const generateQuestionService = new GenerateQuestionService();

    const serviceResponse = await generateQuestionService.execute({
      levelId,
      themeId,
    });

    return response.json(serviceResponse);
  }
}

export { GenerateQuestionController };
