import prismaClient from '../../../prismaClient';

interface ITheme {
  name: string;
}

interface IRequest {
  themes: Array<ITheme>;
}

class CreateThemeService {
  async execute({ themes }: IRequest) {
    const themesToCreate = themes.map(theme => ({
      name: theme.name,
    }));

    const response = await prismaClient.theme.createMany({
      data: themes,
    });

    return response;
  }
}

export { CreateThemeService };
