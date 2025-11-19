import { Router } from 'express';
import { userRoutes } from '../../../modules/users/route/user.routes';

export const routes = Router();

routes.use('/users', userRoutes);