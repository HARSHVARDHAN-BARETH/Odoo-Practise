import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";

export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; // Get token from cookies or Authorization header
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized User' });
        }

        const isblacklisted = await redisClient.get(`blacklist:${token}`);
        if (isblacklisted) {

            res.clearCookie('token'); // Clear the token cookie
            return res.status(401).json({ message: 'Token is blacklisted' });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(403).json({ message: 'Unauthorized User' });
    }
}