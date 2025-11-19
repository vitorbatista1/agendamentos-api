import { Router } from 'express';
import { userController } from '../controller/createUserController';

export const userRoutes = Router();

userRoutes.post('/register', userController.register);
userRoutes.post('/login', userController.login);