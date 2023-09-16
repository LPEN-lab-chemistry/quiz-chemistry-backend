import { Request, Response } from 'express';
import { FindThemeByIdService } from '../services/FindThemeByIdService';

class FindThemeByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.query.id as string, 10);

    const findThemeByIdService = new FindThemeByIdService();

    const serviceResponse = await findThemeByIdService.execute({
      id,
    });

    return response.json(serviceResponse);
  }
}

export { FindThemeByIdController };
