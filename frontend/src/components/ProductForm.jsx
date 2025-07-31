import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    type: 'jeans',
    size: 'Small',
    price: '',
    availability: 'In Stock',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.image) newErrors.image = 'Product image is required';
    if (!formData.title) newErrors.title = 'Title is required';
    else if (formData.title.length < 2 || formData.title.length > 100) {
      newErrors.title = 'Title must be between 2 and 100 characters';
    }
    if (!formData.description) newErrors.description = 'Description is required';
    else if (formData.description.length > 500) {
      newErrors.description = 'Description cannot exceed 500 characters';
    }
    if (!formData.price || formData.price < 0) newErrors.price = 'Price must be a non-negative number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await authService.createItem({
          image: formData.image,
          title: formData.title,
          description: formData.description,
          type: formData.type,
          size: formData.size,
          price: parseFloat(formData.price),
          availability: formData.availability,
        });
        setIsLoading(false);
        alert('Item added successfully!');
        navigate('/dashboard');
      } catch (error) {
        setIsLoading(false);
        setErrors({ form: error.response?.data?.message || 'Failed to add item' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add New Item</h2>
        {errors.form && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{errors.form}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              id="image"
              name="image"
              type="text"
              value={formData.image}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.image ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Blue Jeans"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Describe the item"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="jeans">Jeans</option>
              <option value="dress">Dress</option>
              <option value="swimwear">Swimwear</option>
              <option value="evening dress">Evening Dress</option>
              <option value="jacket">Jacket</option>
              <option value="cargo pants">Cargo Pants</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="shirt">Shirt</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Size
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="49.99"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {isLoading ? 'Adding...' : 'Add Item'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;