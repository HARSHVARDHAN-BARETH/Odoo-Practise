import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
    match: [/^\+?\d{10,15}$/, 'Please enter a valid mobile number'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [13, 'Age must be at least 13'],
    max: [120, 'Age cannot exceed 120'],
  },
  type: {
    type: String,
    required: [true, 'User type is required'],
    enum: ['consumer', 'seller'],
    default: 'consumer',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Generate JWT
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, type: this.type },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

// Validate password
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


const User = mongoose.model('User', userSchema);
export default User;