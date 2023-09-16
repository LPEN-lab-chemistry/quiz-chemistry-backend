import { Router } from 'express';

import { isAuthenticated } from '../../../shared/middlewares/isAuthenticated';
import { CreateQuestionController } from '../controllers/CreateQuestionController';
import { ListQuestionController } from '../controllers/ListQuestionController';
import { ListQuestionByThemeIdController } from '../controllers/ListQuestionByThemeIdController';
import { ListQuestionByLevelIdController } from '../controllers/ListQuestionByLevelIdController';
import { GenerateQuestionController } from '../controllers/GenerateQuestionController';
import { VerifyQuestionController } from '../controllers/VerifyQuestionController';
import { UpdateQuestionController } from '../controllers/UpdateQuestionController';

const questionRouter = Router();

questionRouter.post(
  '/',
  isAuthenticated,
  new CreateQuestionController().handle,
);

questionRouter.get(
  '/list',
  isAuthenticated,
  new ListQuestionController().handle,
);

questionRouter.get(
  '/listbytheme',
  isAuthenticated,
  new ListQuestionByThemeIdController().handle,
);

questionRouter.get(
  '/listbylevel',
  isAuthenticated,
  new ListQuestionByLevelIdController().handle,
);

questionRouter.get(
  '/generate',
  isAuthenticated,
  new GenerateQuestionController().handle,
);

questionRouter.get(
  '/verify',
  isAuthenticated,
  new VerifyQuestionController().handle,
);

questionRouter.put(
  '/update',
  isAuthenticated,
  new UpdateQuestionController().handle,
);

questionRouter.delete(
  '/delete',
  isAuthenticated,
  new UpdateQuestionController().handle,
);

export default questionRouter;
