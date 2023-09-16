import prismaClient from '../../../prismaClient';

interface IRequest {
  userId: string;
}

class GetScoreService {
  async execute({ userId }: IRequest) {
    const response = await prismaClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        score: true,
      },
    });
    return response;
  }
}

export { GetScoreService };
