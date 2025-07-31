import React, { useState, useEffect } from 'react';
import { FaUserEdit, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Debug token
        if (!token) {
          throw new Error('No token found in localStorage');
        }
        const response = await authService.getProfile();
        console.log('Profile response:', response); // Debug response
        setUser(response.user);
        setIsLoading(false);
      } catch (error) {
        console.error('Profile fetch error:', error);
        setError(error.message || 'Failed to fetch profile');
        setIsLoading(false);
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      setError(error.response?.data?.message || 'Failed to logout');
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen bg-gray-100 items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-gray-100 items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <section className="bg-white p-6 rounded-lg shadow mb-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Profile</h2>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user?.image || "https://cdn-icons-png.flaticon.com/512/219/219983.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="text-xl font-medium text-gray-800">{user?.name || 'N/A'}</p>
              <p className="text-gray-600">Mobile: {user?.mobile || 'N/A'}</p>
              <p className="text-gray-600">Email: {user?.email || 'N/A'}</p>
              <p className="text-gray-600">Type: {user?.type || 'N/A'}</p>
              <p className="text-gray-600">Age: {user?.age || 'N/A'}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/edit-profile"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <FaUserEdit className="mr-2" /> Edit Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </div>
          </div>
        </section>

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
};

export default Profile;

