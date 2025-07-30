import mongoose from "mongoose";



const brandSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Seller is required'],
    unique: true,
  },
  brandName: {
    type: String,
    required: [true, 'Brand name is required'],
    trim: true,
    minlength: [2, 'Brand name must be at least 2 characters'],
    maxlength: [100, 'Brand name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  contact: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
    match: [/^\+?\d{10,15}$/, 'Please enter a valid contact number'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  address: {
    type: String,
    trim: true,
    maxlength: [200, 'Address cannot exceed 200 characters'],
  },
  website: {
    type: String,
    trim: true,
    match: [/^https?:\/\/\S+$/, 'Please enter a valid URL'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Brand = mongoose.model("Brand", brandSchema);
export default Brand