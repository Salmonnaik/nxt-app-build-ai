import { Router } from 'express';
import { registerUser, loginUser, getMe, logout } from '../controllers/auth.controller.js';
import authenticate from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/me', authenticate, getMe);
router.post('/logout', authenticate, logout);

export default router;