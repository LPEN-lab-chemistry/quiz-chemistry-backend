import prismaClient from '../../../prismaClient';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  levelId: number;
  themeId: number;
}

class GenerateQuestionService {
  async execute({ levelId, themeId }: IRequest) {
    const totalCount = await prismaClient.question.count({
      where: {
        themeId: themeId,
        levelId: levelId,
        isDeleted: false,
      },
    });

    if (totalCount < 1) {
      throw new AppError(
        'Não há questões disponíveis para os critérios fornecidos.',
      );
    }

    const randomIndex = Math.floor(Math.random() * totalCount);

    const randomQuestion = await prismaClient.question.findMany({
      where: {
        themeId: themeId,
        levelId: levelId,
      },
      skip: randomIndex,
      take: 1,
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
    return randomQuestion[0];
  }
}

export { GenerateQuestionService };
