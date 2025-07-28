import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service.js';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            if (!authService.isAuthenticated()) {
                navigate('/login');
                return;
            }

            const currentUser = authService.getCurrentUser();
            setUser(currentUser);
            setLoading(false);
        };

        checkAuth();
    }, [navigate]);

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white text-lg">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <nav className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <h1 className="text-white text-xl font-bold">SOEN Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-300">Welcome, {user?.name || 'User'}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">Profile</h3>
                            <p className="text-gray-300">Name: {user?.name}</p>
                            <p className="text-gray-300">Email: {user?.email}</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">Quick Stats</h3>
                            <p className="text-gray-300">Status: Active</p>
                            <p className="text-gray-300">Last Login: Today</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">Actions</h3>
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
