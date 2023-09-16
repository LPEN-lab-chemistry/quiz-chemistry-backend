import AppError from '../../../shared/errors/AppError';
import prismaClient from '../../../prismaClient';

interface IRequest {
  id: number;
}

interface IResponse {
  id: number;
  name: string;
}

class DeleteLevelService {
  async execute({ id }: IRequest): Promise<IResponse> {
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
        isDeleted: true,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return levelResponse;
  }
}

export { DeleteLevelService };
