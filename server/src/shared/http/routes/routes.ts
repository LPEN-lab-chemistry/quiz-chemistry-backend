import { Router } from 'express';
import userRouter from '../../../modules/users/routes/userRoutes';
import levelRouter from '../../../modules/level/routes/levelRoutes';
import themeRouter from '../../../modules/theme/routes/themeRoutes';
import questionRouter from '../../../modules/question/routes/questionRoutes';
const routes = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints related to user management
 */
routes.use('/users', userRouter);

/**
 * @swagger
 * tags:
 *   name: Levels
 *   description: Endpoints related to user management
 */
routes.use('/levels', levelRouter);

/**
 * @swagger
 * tags:
 *   name: Themes
 *   description: Endpoints related to user management
 */
routes.use('/themes', themeRouter);

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Endpoints related to user management
 */
routes.use('/questions', questionRouter);

export default routes;
