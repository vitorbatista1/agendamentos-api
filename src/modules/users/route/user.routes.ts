import { Router } from 'express';
import { createUserController } from '../controller/createUserController';
import { loginController } from '../auth/loginController';

export const userRoutes = Router();

userRoutes.post('/', createUserController);
userRoutes.post('/login', loginController);