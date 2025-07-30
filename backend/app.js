import express from 'express';
import morgan from 'morgan';
import mongoDB from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
dotenv.config();

mongoDB(); // Connect to MongoDB\\

const app = express();

app.use(morgan('dev')); // Logging middleware
// Middleware to parse JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Middleware to parse cookies


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/users', userRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is running");  
})

export default app;