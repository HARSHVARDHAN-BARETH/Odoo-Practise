import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

function TermsConditions() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <section className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaFileAlt className="mr-2" /> Terms & Conditions
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-xl font-medium text-gray-700">1. Introduction</h3>
              <p>
                Welcome to our website. By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">2. User Responsibilities</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account. You agree to provide accurate and complete information when creating or updating your profile or listing products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">3. Product Listings</h3>
              <p>
                Users may list clothing products through the Product Form. All listings must comply with our guidelines, including providing accurate details about type, size, price, and category. We reserve the right to remove any listings that violate these terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">4. Intellectual Property</h3>
              <p>
                All content on this website, including text, images, and logos, is the property of our company or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">5. Limitation of Liability</h3>
              <p>
                Our website and services are provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our services, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">6. Contact Us</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                Email: support@mybrand.com
                <br />
                Phone: +1 987 654 321
              </p>
            </div>

            <div>
              <p className="text-sm italic">
                Last updated: July 28, 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsConditions;