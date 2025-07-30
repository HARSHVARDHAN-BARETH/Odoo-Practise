import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

function EditProfile() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: 'John Doe',
    mobile: '+1 234 567 890',
    email: 'john.doe@example.com',
    type: 'Premium User',
    image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
  });

  // State for image preview
  const [imagePreview, setImagePreview] = useState(formData.image);

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
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the updated profile (e.g., API call)
    console.log('Updated Profile:', formData);
    alert('Profile updated successfully!'); // Replace with actual save logic
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <section className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <label className="block">
                <span className="text-gray-600">Profile Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </label>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-600">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Premium User">Premium User</option>
                <option value="Standard User">Standard User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700 transition"
              >
                <FaUserEdit className="mr-2" /> Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default EditProfile;