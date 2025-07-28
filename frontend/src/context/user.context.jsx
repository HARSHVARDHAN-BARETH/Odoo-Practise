import { createContext, useContext, useEffect, useReducer } from 'react';
import { authService } from '../services/auth.service';

// Create User Context
const UserContext = createContext();

// Action types for user state management
const USER_ACTIONS = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    REGISTER_START: 'REGISTER_START',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILURE: 'REGISTER_FAILURE',
    UPDATE_USER: 'UPDATE_USER',
    CLEAR_ERROR: 'CLEAR_ERROR',
    SET_LOADING: 'SET_LOADING'
};

// Initial state
const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    token: null
};

// User reducer function
const userReducer = (state, action) => {
    switch (action.type) {
        case USER_ACTIONS.LOGIN_START:
        case USER_ACTIONS.REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case USER_ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                error: null
            };

        case USER_ACTIONS.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };

        case USER_ACTIONS.LOGIN_FAILURE:
        case USER_ACTIONS.REGISTER_FAILURE:
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                error: action.payload
            };

        case USER_ACTIONS.LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                error: null
            };

        case USER_ACTIONS.UPDATE_USER:
            return {
                ...state,
                user: { ...state.user, ...action.payload }
            };

        case USER_ACTIONS.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };

        case USER_ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state;
    }
};

// User Context Provider Component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    // Initialize user from localStorage on app start
    useEffect(() => {
        const initializeUser = () => {
            const token = authService.getToken();
            const user = authService.getCurrentUser();

            if (token && user) {
                dispatch({
                    type: USER_ACTIONS.LOGIN_SUCCESS,
                    payload: { user, token }
                });
            }
        };

        initializeUser();
    }, []);

    // Login function
    const login = async (credentials) => {
        try {
            dispatch({ type: USER_ACTIONS.LOGIN_START });

            const response = await authService.login(credentials);

            dispatch({
                type: USER_ACTIONS.LOGIN_SUCCESS,
                payload: {
                    user: response.user,
                    token: response.token
                }
            });

            return { success: true, data: response };
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Login failed';
            dispatch({
                type: USER_ACTIONS.LOGIN_FAILURE,
                payload: errorMessage
            });
            return { success: false, error: errorMessage };
        }
    };

    // Register function
    const register = async (userData) => {
        try {
            dispatch({ type: USER_ACTIONS.REGISTER_START });

            const response = await authService.register(userData);

            dispatch({ type: USER_ACTIONS.REGISTER_SUCCESS });

            return { success: true, data: response };
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Registration failed';
            dispatch({
                type: USER_ACTIONS.REGISTER_FAILURE,
                payload: errorMessage
            });
            return { success: false, error: errorMessage };
        }
    };

    // Logout function
    const logout = () => {
        authService.logout();
        dispatch({ type: USER_ACTIONS.LOGOUT });
    };

    // Update user profile
    const updateUser = (userData) => {
        dispatch({
            type: USER_ACTIONS.UPDATE_USER,
            payload: userData
        });
        // Update localStorage as well
        const updatedUser = { ...state.user, ...userData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    // Clear error
    const clearError = () => {
        dispatch({ type: USER_ACTIONS.CLEAR_ERROR });
    };

    // Set loading state
    const setLoading = (loading) => {
        dispatch({
            type: USER_ACTIONS.SET_LOADING,
            payload: loading
        });
    };

    // Context value
    const contextValue = {
        // State
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        error: state.error,
        token: state.token,

        // Actions
        login,
        register,
        logout,
        updateUser,
        clearError,
        setLoading,

        // Utility functions
        getUserId: () => state.user?._id || state.user?.id,
        getUserName: () => state.user?.name,
        getUserEmail: () => state.user?.email,
        hasError: () => !!state.error,
        isLoggedIn: () => state.isAuthenticated && !!state.user
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use User Context
export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

// Export the context for advanced use cases
export { UserContext };

export default UserProvider;
