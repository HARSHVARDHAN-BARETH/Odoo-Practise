import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Seller is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [2, 'Title must be at least 2 characters'],
    maxlength: [100, 'Title cannot exceed 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: ['jeans', 'dress', 'swimwear', 'evening dress', 'jacket', 'cargo pants', 't-shirt', 'shirt', 'other'],
  },
  size: {
    type: String,
    required: [true, 'Size is required'],
    enum: ['Small', 'Medium', 'Large', 'X-Large', 'Other'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  availability: {
    type: String,
    required: [true, 'Availability is required'],
    enum: ['In Stock', 'Out of Stock'],
    default: 'In Stock',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', itemSchema);
export default Item;