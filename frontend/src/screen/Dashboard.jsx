import { useState } from 'react';
import { FaUserEdit, FaCog, FaBox, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample data for products
const products = [
    {
        id: 1,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/044/277/656/small_2x/pile-of-dirty-clothes-on-isolated-transparent-background-png.png',
        category: 'Electronics',
        size: 'Medium',
        price: 99.99,
        availability: 'In Stock 254',
    },
    {
        id: 2,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/044/277/630/small/pile-of-dirty-clothes-on-isolated-transparent-background-png.png',
        category: 'Clothing',
        size: 'Large',
        price: 49.99,
        availability: 'Out of Stock',
    },
];

// Main Dashboard Component
function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed inset-y-0 left-0 w-72  bg-white border-r-black border-r-2 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0`}
            >
                <div className="p-4 mt-3">
                    <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
                    <nav className="mt-10">
                        <ul className="space-y-5">
                            <li  >
                                <li>
                                    <Link
                                        to="/profile"
    className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                    >
                                        <FaUserEdit className="mr-2 text-white" />     <h3 className="text-white  text-md font-semibold">Edit Profile</h3>
                                    </Link>
                                </li>
                            </li>
<li>
  <a
    href="#account-management"
    className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <FaCog className="mr-2 text-white" />
    <h3 className="text-white text-md font-semibold">Account Management</h3>
  </a>
</li>
<li>
  <Link
    to="/ProductForm"
    className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <FaBox className="mr-2 text-white" />
    <h3 className="text-white text-md font-semibold">Product Form</h3>
  </Link>
</li>
<li>
  <Link
    to="/HelpSupport"
    className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <FaQuestionCircle className="mr-2 text-white" />
    <h3 className="text-white text-md font-semibold">Help & Support</h3>
  </Link>
</li>
<li>
  <Link
    to="/TermsConditions"
    className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <FaFileAlt className="mr-2 text-white" />
    <h3 className="text-white text-md font-semibold">Terms & Conditions</h3>
  </Link>
</li>
<li className="absolute bottom-1">
  <a
    href="#logout"
    className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
  >
    <FaFileAlt className="mr-2 text-white" />
    <h3 className="text-white text-md font-semibold">Logout</h3>
  </a>
</li>

                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                {/* Mobile Sidebar Toggle */}
                <button
                    className="md:hidden mb-4 p-2 bg-gray-800 text-white rounded"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button>

                {/* Profile Section */}
                <section className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-gray-900 dark:text-white font-bold mb-5 text-3xl  tracking-tight ">Seller Profile</h2>
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                            alt="Profile"
                            className="w-24 h-24 rounded-full"
                        />
                        <div>
                            <p className="text-gray-900 dark:text-white font-bold  text-xl  tracking-tight">John Doe</p>
                            <p className="text-gray-600 dark:text-gray-400 text-md">john.doe@example.com</p>
                            <p className="text-gray-600">+1 234 567 890</p>
                        </div>
                    </div>
                </section>

                {/* Brand Details Section */}
                <section className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-semibold mb-4">Brand Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600">
                                <strong>Brand Name:</strong> My Awesome Brand
                            </p>
                            <p className="text-gray-600">
                                <strong>Email:</strong> contact@mybrand.com
                            </p>
                            <p className="text-gray-600">
                                <strong>Mobile:</strong> +1 987 654 321
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600">
                                <strong>Bio:</strong> We are a leading provider of innovative
                                products, committed to quality and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Table Section */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Listed Products</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Image</th>
                                    <th className="px-4 py-2 text-left">Category</th>
                                    <th className="px-4 py-2 text-left">Size</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                    <th className="px-4 py-2 text-left">Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="border-b">
                                        <td className="px-4 py-2">
                                            <img
                                                src={product.image}
                                                alt={product.category}
                                                className="w-12 h-12 object-cover"
                                            />
                                        </td>
                                        <td className="px-4 py-2">{product.category}</td>
                                        <td className="px-4 py-2">{product.size}</td>
                                        <td className="px-4 py-2">${product.price}</td>
                                        <td className="px-4 py-2">{product.availability}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;