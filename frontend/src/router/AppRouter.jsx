import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../screen/Dashboard";
import Login from "../screen/login";
import Register from "../screen/register";

const AppRouter = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    {/* Add more routes as needed */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
