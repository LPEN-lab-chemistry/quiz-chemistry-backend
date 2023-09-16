import AppError from '../../../shared/errors/AppError';
import prismaClient from '../../../prismaClient';

interface IRequest {
  id: number;
  name: string;
}

interface IResponse {
  id: number;
  name: string;
}

class UpdateThemeService {
  async execute({ id, name }: IRequest): Promise<IResponse> {
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
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return themeResponse;
  }
}

export { UpdateThemeService };
