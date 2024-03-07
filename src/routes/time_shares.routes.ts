import { Router } from 'express';
import {
  createTimeShareController,
  deleteTimeShareController,
  getTimeShareByIdController,
  getTimeShareController,
  updateTimeShareController
} from '~/controllers/time_shares.controller';
import { time_sharesValidation } from '~/middlewares/timeshares.middleware';
import { accessTokenValidator } from '~/middlewares/user.middleware';
import { wrapAsync } from '~/utils/handlers';

const timeSharesRouter = Router();

timeSharesRouter.get('/', getTimeShareController);

timeSharesRouter.get('/:id', getTimeShareByIdController);

timeSharesRouter.post('/', time_sharesValidation, wrapAsync(createTimeShareController));

timeSharesRouter.patch('/:id', time_sharesValidation, wrapAsync(updateTimeShareController));

timeSharesRouter.delete('/:id', deleteTimeShareController);

export default timeSharesRouter;
