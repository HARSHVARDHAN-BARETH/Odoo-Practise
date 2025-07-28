import { validationResult } from 'express-validator';
import redisClient from '../services/redis.service.js';
import * as userServices from '../services/user.service.js';

export const createUsercontroller = async (req, res) => {

    // Validate request body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        // Register the user
        const user = await userServices.registerUser(email, password);

        // Generate JWT token
        const token = user.generateJWT();

        res.status(201).json({ user, token });
    } catch (error) {
        console.error('Error creating user:', error);

        // Handle specific error messages
        if (error.message === 'User with this email already exists') {
            return res.status(409).json({ message: 'User with this email already exists' });
        }

        if (error.message === 'Email and password are required') {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        res.status(500).json({ message: 'Internal server error' });
    }
}

export const loginUserController = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userServices.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check password validity
        const isValidPassword = await user.isvalidPassword(password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = user.generateJWT();

        res.status(200).json({ user, token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const profileController = async (req, res) => {
    try {
        const user = req.user; // User info is attached to the request object by auth middleware
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const logoutController = async (req, res) => {
    try {

        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        redisClient.set(`user:${req.user._id}:session`, token, 'EX', 60 * 60 * 24); // Store session in Redis with 1 day expiration
        const userId = req.user._id; // Assuming user ID is stored in req.user by auth middleware


        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}