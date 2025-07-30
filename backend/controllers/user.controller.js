import { validationResult } from 'express-validator';
import redisClient from '../services/redis.service.js';
import * as userServices from '../services/user.service.js';
import { registerUser,findUserByEmail } from '../services/user.service.js';

export const createUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password, mobile, age, type } = req.body;
    const user = await registerUser({ name, email, password, mobile, age, type });
    const token = user.generateJWT();
    res.status(201).json({ user: { _id: user._id, name, email, mobile, age, type }, token });
  } catch (error) {
    console.error('Error creating user:', error);
    if (error.message === 'All fields are required') {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loginUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = user.generateJWT();
    res.status(200).json({ user: { _id: user._id, name: user.name, email, mobile: user.mobile, age: user.age, type: user.type }, token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const profileController = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        age: user.age,
        type: user.type,
      },
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logoutController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    await redisClient.set(`blacklist:${token}`, 'true', 'EX', 60 * 60 * 24); // Blacklist token for 1 day
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

