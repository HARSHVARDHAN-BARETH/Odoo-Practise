import usermodel from '../models/user.model.js';



export const registerUser = async (email, password) => {
    try {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        // Hash the password
        const hashedPassword = await usermodel.hashPassword(password);

        // Create a new user
        const user = await usermodel.create({
            email,
            password: hashedPassword
        });
        // Save the user to the database
        return user;
    } catch (error) {
        console.error('Error registering user:', error);

        // Handle duplicate email error specifically
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            throw new Error('User with this email already exists');
        }

        throw new Error('Internal server error');
    }
};

export const findUserByEmail = async (email) => {
    try {
        if (!email) {
            throw new Error('Email is required');
        }

        // Find user by email and include password field
        const user = await usermodel.findOne({ email }).select('+password');
        return user;
    } catch (error) {
        console.error('Error finding user by email:', error);
        throw new Error('Internal server error');
    }
};
