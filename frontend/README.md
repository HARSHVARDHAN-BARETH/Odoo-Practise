# Login-Logout Frontend

A modern React frontend application built with Vite for user authentication and profile management. This application provides a complete user authentication system with login, registration, and dashboard functionality.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Dashboard**: Protected user dashboard with profile management
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **State Management**: Context API for user state management
- **Routing**: React Router for client-side navigation
- **API Integration**: Axios for HTTP requests with interceptors
- **Modern Development**: Vite for fast development and hot module replacement

## 🛠️ Tech Stack

- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Fast build tool and development server
- **React Router Dom 7.7.0** - Client-side routing
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Axios 1.10.0** - HTTP client for API requests
- **Firebase 12.0.0** - Authentication and backend services
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── config/          # Configuration files
│   └── axios.js     # Axios configuration with interceptors
├── context/         # React Context providers
│   └── user.context.jsx  # User authentication context
├── router/          # Routing configuration
│   └── AppRouter.jsx     # Main router component
├── screen/          # Page components
│   ├── Dashboard.jsx     # Protected dashboard page
│   ├── login.jsx         # Login page
│   └── register.jsx      # Registration page
├── services/        # API service functions
│   └── auth.service.js   # Authentication API calls
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Routes

- `/` - Dashboard (protected route)
- `/dashboard` - User dashboard (protected route)
- `/login` - User login page
- `/register` - User registration page

## 🔐 Authentication Flow

1. **Registration**: Users can create new accounts
2. **Login**: Existing users can log in with credentials
3. **Token Management**: JWT tokens are stored in localStorage
4. **Protected Routes**: Dashboard requires authentication
5. **Auto-logout**: Handles token expiration and unauthorized access

## 📡 API Integration

The frontend communicates with the backend API using Axios. Key features:

- **Base URL Configuration**: Configurable API endpoint
- **Request Interceptors**: Automatic token attachment
- **Response Interceptors**: Error handling and token refresh
- **Timeout Management**: Request timeout configuration

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Modern dark UI design
- **Custom Components**: Reusable styled components

## 🔒 Security Features

- **JWT Token Storage**: Secure token management
- **Route Protection**: Private route authentication
- **CORS Handling**: Cross-origin request support
- **Input Validation**: Client-side form validation

## 🧩 Context Management

The application uses React Context for state management:

- **UserContext**: Manages user authentication state
- **Actions**: Login, logout, register, update user
- **Reducers**: Centralized state updates
- **Providers**: Component tree state sharing

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🐛 Error Handling

- **API Errors**: Graceful error handling for API failures
- **Network Errors**: Offline/connectivity error management
- **Form Validation**: Real-time form validation feedback
- **User Feedback**: Toast notifications for user actions

## 🚀 Performance

- **Code Splitting**: Lazy loading for better performance
- **Bundle Optimization**: Vite's optimized build process
- **Asset Optimization**: Compressed images and assets
- **Caching**: Browser caching for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Related

- [Backend API Documentation](../backend/README.md)
- [Full Project Documentation](../README.md)

## 📞 Support

For support and questions, please open an issue in the repository.
