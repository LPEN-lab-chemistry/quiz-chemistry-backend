import prismaClient from '../../../prismaClient';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  questionId: number;
  optionSelected: string;
  userId: string;
}

class VerifyQuestionService {
  async execute({ questionId, optionSelected, userId }: IRequest) {
    const question = await prismaClient.question.findUnique({
      where: {
        id: questionId,
        responseQuestion: optionSelected,
      },
      select: {
        points: true,
      },
    });

    if (question == null) {
      return 'Resposta incorreta!';
    }

    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: {
        score: {
          increment: question.points,
        },
      },
    });

    return 'Resposta correta';
  }
}

export { VerifyQuestionService };
