import AppError from '../../../shared/errors/AppError';
import prismaClient from '../../../prismaClient';

interface IRequest {
  id: number;
}

interface IResponse {
  id: number;
  name: string;
}

class DeleteThemeService {
  async execute({ id }: IRequest): Promise<IResponse> {
    const themeExists = await prismaClient.theme.findUnique({
      where: {
        id: id,
        isDeleted: false,
      },
    });
    if (!themeExists) {
      throw new AppError('Invalid id.');
    }

    const themeResponse = await prismaClient.theme.update({
      where: {
        id: id,
      },
      data: {
        isDeleted: true,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return themeResponse;
  }
}

export { DeleteThemeService };
