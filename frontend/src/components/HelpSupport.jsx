import React, { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaPhone } from 'react-icons/fa';

function HelpSupport() {
  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the form data (e.g., API call)
    console.log('Support Request:', formData);
    alert('Your message has been sent!'); // Replace with actual submission logic
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <section className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Help & Support</h2>

          {/* Contact Form */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-gray-700">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  <FaEnvelope className="mr-2" /> Send Message
                </button>
              </div>
            </form>
          </div>

          {/* FAQs Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-gray-700">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  How do I update my profile information?
                </h4>
                <p className="text-gray-600">
                  You can update your profile by navigating to the "Edit Profile" section in the dashboard and filling out the form with your new details.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  How can I reset my password?
                </h4>
                <p className="text-gray-600">
                  Go to the "Account Management" section and select "Reset Password" to receive a password reset link via email.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  How do I contact support?
                </h4>
                <p className="text-gray-600">
                  Use the contact form above or reach out via email or phone listed below.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-700">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" /> Email: support@mybrand.com
              </p>
              <p className="flex items-center text-gray-600">
                <FaPhone className="mr-2" /> Phone: +1 987 654 321
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HelpSupport;