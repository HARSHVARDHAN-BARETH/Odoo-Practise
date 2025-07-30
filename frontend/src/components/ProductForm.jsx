import React, { useState } from 'react';
import { FaBox } from 'react-icons/fa';

function ProductForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    type: '',
    size: '',
    price: '',
    category: '',
    image: null,
  });

  // State for image preview
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: file });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the product (e.g., API call)
    console.log('New Product:', formData);
    alert('Product listed successfully!'); // Replace with actual save logic
    // Reset form
    setFormData({ type: '', size: '', price: '', category: '', image: null });
    setImagePreview(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <section className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">List New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Image */}
            <div className="flex flex-col items-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Product Preview"
                  className="w-32 h-32 rounded-md object-cover mb-4"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center mb-4">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <label className="block">
                <span className="text-gray-600">Product Image</span>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                  required
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </label>
            </div>

            {/* Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-600">
                Product Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                placeholder="e.g., T-Shirt, Jeans"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-600">
                Size
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Size
                </option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                placeholder="e.g., 29.99"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Casual">Casual</option>
                <option value="Formal">Formal</option>
                <option value="Sportswear">Sportswear</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700 transition"
              >
                <FaBox className="mr-2" /> List Product
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProductForm;