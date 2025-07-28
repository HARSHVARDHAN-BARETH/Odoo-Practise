import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [3, 'Email must be at least 3 characters long'],
        maxlength: [50, 'Email must be at most 50 characters long'],
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
});

userSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}


userSchema.methods.isvalidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


// Generate JWT token
// This method can be used to generate a token for the user after login or registration
// It uses the user's ID and a secret key from environment variables
// The token expires in 1 hour
userSchema.methods.generateJWT = function () {
    const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


const User = mongoose.model('User', userSchema);
export default User;