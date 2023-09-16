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

class UpdateLevelService {
  async execute({ id, name }: IRequest): Promise<IResponse> {
    const levelExists = await prismaClient.level.findUnique({
      where: {
        id: id,
        isDeleted: false,
      },
    });
    if (!levelExists) {
      throw new AppError('Invalid id.');
    }

    const levelResponse = await prismaClient.level.update({
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
    return levelResponse;
  }
}

export { UpdateLevelService };
