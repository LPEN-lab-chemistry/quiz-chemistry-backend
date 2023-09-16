import prismaClient from '../../../prismaClient';

interface IRequest {
  levelId: number;
  page: number;
  size: number;
}

class ListQuestionByLevelIdService {
  async execute({ levelId, page, size }: IRequest) {
    if (page < 1) {
      page = 1;
    }
    if (size < 1) {
      size = 10;
    }

    const skipAmount = (page - 1) * size;

    const listResponse = await prismaClient.question.findMany({
      where: {
        levelId: levelId,
        isDeleted: false,
      },
      skip: skipAmount,
      take: size,
      select: {
        id: true,
        description: true,
        points: true,
        responseQuestion: true,
        optionA: true,
        optionB: true,
        optionC: true,
        optionD: true,
        optionE: true,
        theme: {
          select: {
            id: true,
            name: true,
          },
        },
        level: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return listResponse;
  }
}

export { ListQuestionByLevelIdService };
