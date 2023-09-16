import prismaClient from '../../../prismaClient';

interface IRequest {
  id: number;
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

class UpdateQuestionService {
  async execute({
    id,
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
    const updatedQuestion = await prismaClient.question.update({
      where: {
        id: id,
      },
      data: {
        description: description,
        points: points,
        responseQuestion: responseQuestion,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        optionE: optionE,
        theme: {
          connect: {
            id: themeId,
          },
        },
        level: {
          connect: {
            id: levelId,
          },
        },
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

    return updatedQuestion;
  }
}

export { UpdateQuestionService };
