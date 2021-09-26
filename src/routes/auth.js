import { Router } from 'express';
import AuthController from '../controller/authController';

const Route = Router();

Route.post('/', AuthController.Login);

export default Route;