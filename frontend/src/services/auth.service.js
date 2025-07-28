import axios from '../config/axios.js';

// Authentication service
export const authService = {
    // Login user
    login: async (credentials) => {
        try {
            const response = await axios.post('/auth/login', credentials);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Register user
    register: async (userData) => {
        try {
            const response = await axios.post('/auth/register', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Logout user
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    // Get current user
    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    // Check if user is authenticated
    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        return !!token;
    },

    // Get auth token
    getToken: () => {
        return localStorage.getItem('token');
    },

    // Refresh token if needed
    refreshToken: async () => {
        try {
            const response = await axios.post('/auth/refresh');
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

// User profile service
export const userService = {
    // Get user profile
    getProfile: async () => {
        try {
            const response = await axios.get('/users/profile');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Update user profile
    updateProfile: async (userData) => {
        try {
            const response = await axios.put('/users/profile', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Change password
    changePassword: async (passwordData) => {
        try {
            const response = await axios.put('/users/change-password', passwordData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default { authService, userService };
