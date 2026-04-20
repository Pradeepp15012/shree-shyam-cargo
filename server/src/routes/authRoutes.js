import { Router } from 'express';
import { login } from '../controllers/authController.js';
import { loginValidation } from '../middleware/validate.js';

const router = Router();

router.post('/login', loginValidation, login);

export default router;

