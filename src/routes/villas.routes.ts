import { Router } from 'express';
import {
  createVillaController,
  deleteVillaController,
  getVillaByIdController,
  getVillasController,
  updateVillaController
} from '~/controllers/villas.controller';
import { accessTokenValidator } from '~/middlewares/user.middleware';
import { createUtilitiesValidation } from '~/middlewares/utilities.middleware';
import { wrapAsync } from '~/utils/handlers';

const villaRouter = Router();

villaRouter.get('/', accessTokenValidator, getVillasController);

villaRouter.get('/:id', accessTokenValidator, getVillaByIdController);

villaRouter.post('/', accessTokenValidator, createUtilitiesValidation, wrapAsync(createVillaController));

villaRouter.patch('/:id', accessTokenValidator, createUtilitiesValidation, wrapAsync(updateVillaController));

villaRouter.delete('/:id', accessTokenValidator, wrapAsync(deleteVillaController));

export default villaRouter;
