import { Router } from 'express';

import { isAuthenticated } from '../../../shared/middlewares/isAuthenticated';
import { CreateLevelController } from '../controllers/CreateLevelController';
import { ListLevelController } from '../controllers/ListLevelController';
import { DeleteLevelController } from '../controllers/DeleteLevelController';
import { UpdateLevelController } from '../controllers/UpdateLevelController';
import { FindLevelByIdController } from '../controllers/FindLevelByIdController';

const levelRouter = Router();

levelRouter.post('/', isAuthenticated, new CreateLevelController().handle);

levelRouter.get('/find', isAuthenticated, new FindLevelByIdController().handle);

levelRouter.get('/list', isAuthenticated, new ListLevelController().handle);

levelRouter.put('/update', isAuthenticated, new UpdateLevelController().handle);

levelRouter.delete(
  '/delete',
  isAuthenticated,
  new DeleteLevelController().handle,
);

export default levelRouter;
