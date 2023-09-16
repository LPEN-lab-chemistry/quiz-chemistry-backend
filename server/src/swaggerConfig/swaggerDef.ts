import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quiz-chemistry',
      description: 'Quiz chemistry backend',
      version: '1.0.1',
    },
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [
    path.resolve(__dirname, '..', './shared', './http', './routes', '*'),
    path.resolve(__dirname, '..', './modules', './users', './routes', '*'),
  ],
};

const specs = swaggerJSDoc(options);
export default specs;
