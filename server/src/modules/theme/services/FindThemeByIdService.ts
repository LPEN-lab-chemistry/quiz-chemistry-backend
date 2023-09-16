import prismaClient from '../../../prismaClient';
import AppError from '../../../shared/errors/AppError';
interface IRequest {
  id: number;
}

interface IResponse {
  id: number;
  name: string;
}

class FindThemeByIdService {
  async execute({ id }: IRequest): Promise<IResponse> {
    const response = await prismaClient.theme.findUnique({
      where: {
        id: id,
        isDeleted: false,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!response) {
      throw new AppError('Invalid id.');
    }

    return response;
  }
}

export { FindThemeByIdService };
