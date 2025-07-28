import { Router } from "express";
import { body } from 'express-validator';
import * as userController from '../controllers/user.controller.js';
import * as authMiddleware from '../middlewares/auth.middleware.js'; // Assuming you have an auth middleware for protected routes

const router = Router();


router.post('/register',
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 3, max: 10 }).withMessage('Password must be between 3 and 10 characters'),
    userController.createUsercontroller
);

router.post('/login',
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 3, max: 10 }).withMessage('Password must be between 3 and 10 characters'),
    userController.loginUserController
);

router.get('/profile', authMiddleware.authUser, userController.profileController); // Assuming you have a method to get user profile

router.get('/logout', authMiddleware.authUser, userController.logoutController); // Assuming you have a method to handle logout 


export default router;