import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../screen/Dashboard";
import Login from "../screen/login";
import Register from "../screen/register";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import HelpSupport from "../components/HelpSupport";
import ProductForm from "../components/ProductForm";
import TermsConditions from "../components/TermsConditions";
import ReactMemo from "../components/ReactMemo";

const AppRouter = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/EditProfile' element={<EditProfile/>} />
                    <Route path='/HelpSupport' element={<HelpSupport/>} />
                    <Route path='/ProductForm' element={<ProductForm/>} />
                    <Route path='/TermsConditions' element={<TermsConditions/>} />
                    <Route path='/ReactMemo' element={<ReactMemo/>} />
                    {/* Add more routes as needed */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
