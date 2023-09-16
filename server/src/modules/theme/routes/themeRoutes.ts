import { Router } from 'express';

import { isAuthenticated } from '../../../shared/middlewares/isAuthenticated';
import { CreateThemeController } from '../controllers/CreateThemeController';
import { FindThemeByIdController } from '../controllers/FindThemeByController';
import { ListThemeController } from '../controllers/ListThemeController';
import { UpdateThemeController } from '../controllers/UpdateThemeController';
import { DeleteThemeController } from '../controllers/DeleteThemeController';

const themeRouter = Router();

themeRouter.post('/', isAuthenticated, new CreateThemeController().handle);

themeRouter.get('/find', isAuthenticated, new FindThemeByIdController().handle);

themeRouter.get('/list', isAuthenticated, new ListThemeController().handle);

themeRouter.put('/update', isAuthenticated, new UpdateThemeController().handle);

themeRouter.delete(
  '/delete',
  isAuthenticated,
  new DeleteThemeController().handle,
);

export default themeRouter;
