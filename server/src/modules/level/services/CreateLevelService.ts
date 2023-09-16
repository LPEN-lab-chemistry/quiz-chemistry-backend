import prismaClient from '../../../prismaClient';

interface ILevel {
  name: string;
}

interface IRequest {
  levels: Array<ILevel>;
}

class CreateLevelService {
  async execute({ levels }: IRequest) {
    const levelsToCreate = levels.map(level => ({
      name: level.name,
    }));

    const response = await prismaClient.level.createMany({
      data: levels,
    });

    return response;
  }
}

export { CreateLevelService };
