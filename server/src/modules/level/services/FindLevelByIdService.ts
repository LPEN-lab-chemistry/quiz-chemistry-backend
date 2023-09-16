import prismaClient from '../../../prismaClient';
import AppError from '../../../shared/errors/AppError';
interface IRequest {
  id: number;
}

interface IResponse {
  id: number;
  name: string;
}

class FindLevelByIdService {
  async execute({ id }: IRequest): Promise<IResponse> {
    const response = await prismaClient.level.findUnique({
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

export { FindLevelByIdService };
