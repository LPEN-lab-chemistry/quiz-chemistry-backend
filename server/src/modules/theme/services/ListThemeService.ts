import prismaClient from '../../../prismaClient';
interface IRequest {
  queryName: string;
  page: number;
  size: number;
}

class ListThemeService {
  async execute({ queryName, page, size }: IRequest) {
    if (page < 1) {
      page = 1;
    }
    if (size < 1) {
      size = 10;
    }

    const skipAmount = (page - 1) * size;
    const listResponse = await prismaClient.theme.findMany({
      where: {
        name: {
          contains: queryName,
        },
        isDeleted: false,
      },
      skip: skipAmount,
      take: size,
      select: {
        id: true,
        name: true,
      },
    });
    return listResponse;
  }
}

export { ListThemeService };
