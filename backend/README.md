# Login-Logout Backend API

A robust Node.js backend application built with Express.js that provides user authentication functionality including registration, login, logout, and profile management with JWT tokens and Redis session management.

## Features

- **User Registration**: Create new user accounts with email and password validation
- **User Login**: Authenticate users with JWT tokens
- **User Logout**: Secure logout functionality with session management
- **User Profile**: Access protected user profile information
- **Password Hashing**: Secure password storage using bcrypt
- **JWT Authentication**: Token-based authentication system
- **Redis Integration**: Session management and caching
- **Input Validation**: Comprehensive request validation using express-validator
- **MongoDB Integration**: User data persistence with Mongoose
- **Logging**: Request logging with Morgan
- **CORS Support**: Cross-origin resource sharing enabled

## Tech Stack

- **Runtime**: Node.js (ES6 Modules)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Session Management**: Redis with ioredis
- **Validation**: express-validator
- **Logging**: Morgan
- **Environment Variables**: dotenv

## Project Structure

```
backend/
├── app.js                    # Express app configuration
├── server.js                 # Server entry point
├── package.json              # Project dependencies
├── controllers/
│   └── user.controller.js    # User-related request handlers
├── db/
│   └── db.js                 # MongoDB connection configuration
├── middlewares/
│   └── auth.middleware.js    # Authentication middleware
├── models/
│   └── user.model.js         # User model schema
├── routes/
│   └── user.routes.js        # User API routes
└── services/
    ├── redis.service.js      # Redis service configuration
    └── user.service.js       # User business logic
```

## API Endpoints

### Authentication Routes

All routes are prefixed with `/users`

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/register` | Register a new user | No |
| POST | `/login` | Login user | No |
| GET | `/profile` | Get user profile | Yes |
| GET | `/logout` | Logout user | Yes |

### Request/Response Examples

#### Register User
```http
POST /users/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /users/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Profile (Protected Route)
```http
GET /users/profile
Authorization: Bearer <jwt_token>
```

#### Logout (Protected Route)
```http
GET /users/logout
Authorization: Bearer <jwt_token>
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd login-logout/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/login-logout
   JWT_SECRET=your-super-secret-jwt-key
   REDIS_URL=redis://localhost:6379
   ```

4. **Start the application**
   ```bash
   npm start
   ```
   ```bash
    npx nodemon
```
## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `MONGO_URI` | MongoDB connection string | Required |
| `JWT_SECRET` | JWT signing secret | Required |
| `REDIS_URL` | Redis connection URL | Required |

## Dependencies

### Production Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **bcryptjs**: Password hashing library
- **jsonwebtoken**: JWT implementation
- **express-validator**: Input validation middleware
- **ioredis**: Redis client for Node.js
- **cookie-parser**: Cookie parsing middleware
- **cors**: CORS middleware
- **dotenv**: Environment variable loader
- **morgan**: HTTP request logger

## Development

### Running in Development Mode
```bash
npm run dev
```

### Testing
```bash
npm test
```

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Authentication**: Stateless authentication using JSON Web Tokens
- **Input Validation**: All inputs are validated using express-validator
- **CORS Protection**: Cross-origin requests are properly configured
- **Session Management**: Redis-based session management for enhanced security

## Authentication Flow

1. **Registration**: User provides email and password → Password is hashed → User stored in MongoDB
2. **Login**: User provides credentials → Password verified → JWT token generated → Token sent to client
3. **Protected Routes**: Client sends JWT token → Token verified → Request processed
4. **Logout**: JWT token invalidated → Session cleared from Redis

## Error Handling

The API includes comprehensive error handling for:
- Invalid credentials
- Duplicate email registration
- JWT token validation
- Database connection errors
- Input validation errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support and questions, please create an issue in the repository.
