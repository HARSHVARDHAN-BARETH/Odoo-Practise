import { Router } from 'express';
import { body } from 'express-validator';
import {
  createUserController,
  loginUserController,
  profileController,
  logoutController
} from '../controllers/user.controller.js';

import {authUser} from '../middlewares/auth.middleware.js'

const router = Router();

router.post(
  '/register',
  [
    body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('mobile').matches(/^\+?\d{10,15}$/).withMessage('Invalid mobile number'),
    body('age').isInt({ min: 13, max: 120 }).withMessage('Age must be between 13 and 120'),
    body('type').isIn(['consumer', 'seller']).withMessage('Type must be consumer or seller'),
  ],
  createUserController
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  loginUserController
);

router.get('/profile', authUser, profileController);
router.post('/logout', authUser, logoutController);

export default router