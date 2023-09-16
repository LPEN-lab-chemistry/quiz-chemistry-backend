import prismaClient from '../../../prismaClient';
interface IRequest {
  queryName: string;
}

class ListLevelService {
  async execute({ queryName }: IRequest) {
    const listResponse = await prismaClient.level.findMany({
      where: {
        name: {
          contains: queryName,
        },
        isDeleted: false,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return listResponse;
  }
}

export { ListLevelService };
