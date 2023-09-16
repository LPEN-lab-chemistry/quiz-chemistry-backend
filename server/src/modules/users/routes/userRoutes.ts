import { Router } from 'express';
import { isAuthenticated } from '../../../shared/middlewares/isAuthenticated';
import { CreateUserController } from '../controllers/CreateUserController';
import { AuthUserController } from '../controllers/AuthUserController';
import { GetScoreController } from '../controllers/GetScoreController';
const usersRouter = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: User name
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: mypassword
 *               confirmPassword:
 *                 type: string
 *                 example: mypassword
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 score:
 *                   type: number
 *       '400':
 *         description: Bad Request - Invalid input data
 *       '500':
 *         description: Internal Server Error - An error occurred on the server
 */
usersRouter.post('/', new CreateUserController().handle);
/**
 * @swagger
 * /users/auth:
 *   post:
 *     summary: Authenticate user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: mypassword
 *     responses:
 *       '200':
 *         description: Successful authentication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 06e459ef-53d3-42b8-9196-7422a80ed797
 *                 name:
 *                   type: string
 *                   example: user name
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       '400':
 *         description: Bad Request - Invalid input data
 *       '500':
 *         description: Internal Server Error - An error occurred on the server
 */
usersRouter.post('/auth', new AuthUserController().handle);

usersRouter.get('/score', new GetScoreController().handle);

export default usersRouter;
