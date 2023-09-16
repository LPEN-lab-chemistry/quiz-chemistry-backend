import { Request, Response } from 'express';
import { ListQuestionByThemeIdService } from '../services/ListQuestionByThemeIdService';

class ListQuestionByThemeIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const themeId = parseInt(request.query.themeId as string, 10);
    const size = parseInt(request.query.size as string, 10);
    const page = parseInt(request.query.page as string, 10);

    const listQuestionByThemeIdService = new ListQuestionByThemeIdService();

    const serviceResponse = await listQuestionByThemeIdService.execute({
      themeId,
      size,
      page,
    });

    return response.json(serviceResponse);
  }
}

export { ListQuestionByThemeIdController };
