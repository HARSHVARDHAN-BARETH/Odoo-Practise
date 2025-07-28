import express from 'express';
import morgan from 'morgan';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js';

import cookieParser from 'cookie-parser';
connectDB(); // Connect to MongoDB\\

const app = express();

app.use(morgan('dev')); // Logging middleware
// Middleware to parse JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Middleware to parse cookies

app.use('/users', userRoutes); // User routes

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;