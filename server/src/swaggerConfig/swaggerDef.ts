import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ArboControl',
      description:
        'ArboControle is a reporting system for arbovirus complaints aimed at strengthening surveillance and combating vector-borne diseases, such as dengue, Zika, and chikungunya, in our municipality.',
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
  apis: [path.resolve(__dirname, '..', './shared', './http', './routes', '*')],
};

const specs = swaggerJSDoc(options);
export default specs;
