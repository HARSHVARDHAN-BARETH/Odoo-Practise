import axios from '../config/axios.js';


export const authService = {
  register: async (data) => {
    const response = await fetch('http://localhost:5001/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }
    return response.json();
  },

  login: async (data) => {
    const response = await fetch('http://localhost:5001/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }
    return response.json();
  },

  getProfile: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await fetch('http://localhost:5001/api/users/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch profile');
    }
    return response.json();
  },

  logout: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await fetch('http://localhost:5001/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Logout failed');
    }
    return response.json();
  },
  createItem: async (data) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await fetch('http://localhost:5001/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to add item');
    }
    return response.json();
  }
};
// // Authentication service
// export const authService = {
//     // Login user
//     login: async (credentials) => {
//         try {
//             const response = await axios.post('/auth/login', credentials);
//             if (response.data.token) {
//                 localStorage.setItem('token', response.data.token);
//                 localStorage.setItem('user', JSON.stringify(response.data.user));
//             }
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     },

//     // Register user
//     register: async (userData) => {
//         try {
//             const response = await axios.post('/auth/register', userData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     },

//     // Logout user
//     logout: () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//     },

//     // Get current user
//     getCurrentUser: () => {
//         const user = localStorage.getItem('user');
//         return user ? JSON.parse(user) : null;
//     },

//     // Check if user is authenticated
//     isAuthenticated: () => {
//         const token = localStorage.getItem('token');
//         return !!token;
//     },

//     // Get auth token
//     getToken: () => {
//         return localStorage.getItem('token');
//     },

//     // Refresh token if needed
//     refreshToken: async () => {
//         try {
//             const response = await axios.post('/auth/refresh');
//             if (response.data.token) {
//                 localStorage.setItem('token', response.data.token);
//             }
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }
// };

// // User profile service
// export const userService = {
//     // Get user profile
//     getProfile: async () => {
//         try {
//             const response = await axios.get('/users/profile');
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     },

//     // Update user profile
//     updateProfile: async (userData) => {
//         try {
//             const response = await axios.put('/users/profile', userData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     },

//     // Change password
//     changePassword: async (passwordData) => {
//         try {
//             const response = await axios.put('/users/change-password', passwordData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }
// };


