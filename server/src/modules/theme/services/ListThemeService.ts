import prismaClient from '../../../prismaClient';
interface IRequest {
  queryName: string;
}

class ListThemeService {
  async execute({ queryName }: IRequest) {
    const listResponse = await prismaClient.theme.findMany({
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

export { ListThemeService };
