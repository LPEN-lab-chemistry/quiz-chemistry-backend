import prismaClient from '../../../prismaClient';

interface IRequest {
  description: string;
  points: number;
  responseQuestion: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE: string;
  themeId: number;
  levelId: number;
}

class CreateQuestionService {
  async execute({
    description,
    points,
    responseQuestion,
    optionA,
    optionB,
    optionC,
    optionD,
    optionE,
    themeId,
    levelId,
  }: IRequest) {
    const response = await prismaClient.question.create({
      data: {
        description: description,
        points: points,
        responseQuestion: responseQuestion,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        optionE: optionE,
        themeId: themeId,
        levelId: levelId,
      },
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

    return response;
  }
}

export { CreateQuestionService };
