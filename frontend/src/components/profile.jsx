import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        {/* Profile Section */}
        <section className="bg-white p-6 rounded-lg shadow mb-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Profile</h2>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="text-xl font-medium text-gray-800">John Doe</p>
              <p className="text-gray-600">Mobile: +1 234 567 890</p>
              <p className="text-gray-600">Email: john.doe@example.com</p>
              <p className="text-gray-600">Type: Premium User</p>
            </div>
<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center">
  <Link
    className="flex items-center text-white"
    to="/EditProfile"
  >
    <FaUserEdit className="mr-2 text-xl text-black" />
    <h3 className="text-black  text-lg font-semibold">Edit Profile</h3>
  </Link>
</button>          </div>
        </section>

        {/* Additional Content Section */}
        <section className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Additional Information</h2>
          <p className="text-gray-600">
            This section can include additional user details, preferences, or other relevant information.
            Customize this area to display content such as user preferences, account settings, or other
            details as needed.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Profile;