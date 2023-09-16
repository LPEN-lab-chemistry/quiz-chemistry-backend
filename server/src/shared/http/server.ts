import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes/routes';
import AppError from '../errors/AppError';
import swaggerUi from 'swagger-ui-express';
import specs from '../../swaggerConfig/swaggerDef';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }),
);

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(8080, () => {
  console.log(
    '\n\nServer started on http://localhost:8080.\nYou can also explore the API routes at http://localhost:8080/api-docs.',
  );
});
