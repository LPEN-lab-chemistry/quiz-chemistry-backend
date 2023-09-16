import AppError from '../../../shared/errors/AppError';
import prismaClient from '../../../prismaClient';

interface IRequest {
  id: number;
}

class DeleteQuestionService {
  async execute({ id }: IRequest) {
    const levelExists = await prismaClient.question.findUnique({
      where: {
        id: id,
        isDeleted: false,
      },
    });
    if (!levelExists) {
      throw new AppError('Invalid id.');
    }

    const levelResponse = await prismaClient.question.update({
      where: {
        id: id,
      },
      data: {
        isDeleted: true,
      },
      select: {
        id: true,
      },
    });
    return levelResponse;
  }
}

export { DeleteQuestionService };
