import Item from '../models/item.model.js';
import User from '../models/user.model.js';
import { body,validationResult } from 'express-validator';

export const validateItem = [
  body('image').trim().notEmpty().withMessage('Product image is required'),
  body('title')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Title must be between 2 and 100 characters'),
  body('description')
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('type')
    .isIn(['jeans', 'dress', 'swimwear', 'evening dress', 'jacket', 'cargo pants', 't-shirt', 'shirt', 'other'])
    .withMessage('Invalid item type'),
  body('size')
    .isIn(['Small', 'Medium', 'Large', 'X-Large', 'Other'])
    .withMessage('Invalid size'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),
  body('availability')
    .isIn(['In Stock', 'Out of Stock'])
    .withMessage('Availability must be either "In Stock" or "Out of Stock"'),
];

// Controller to create a new item
export const createItemController = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if user is a seller
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.type !== 'seller') {
      return res.status(403).json({ message: 'Only sellers can add items' });
    }

    // Create new item
    const { image, title, description, type, size, price, availability } = req.body;
    const item = new Item({
      seller: req.user._id,
      image,
      title,
      description,
      type,
      size,
      price,
      availability,
    });

    // Save item to database
    await item.save();

    // Populate seller details (optional, for response)
    const populatedItem = await Item.findById(item._id).populate('seller', 'name email brandName');

    res.status(201).json({ item: populatedItem, message: 'Item created successfully' });
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};