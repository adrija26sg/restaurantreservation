# Restaurant Reservation System

A full-stack web application for managing restaurant reservations, built with React and Node.js.
![image](https://github.com/user-attachments/assets/0ae7ad38-77a4-4e97-819d-bfbbed4d4d14)
![image](https://github.com/user-attachments/assets/225f45d6-d3c2-436c-b997-0bd54f253e73)
![image](https://github.com/user-attachments/assets/af0c2eab-c44a-495a-98b5-83d7e8bb1b88)


## Project Structure

```
restaurantreservation/
├── frontend/           # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Static files
│   └── package.json   # Frontend dependencies
└── backend/           # Node.js backend application
    ├── routes/        # API routes
    ├── models/        # Database models
    ├── controller/    # Route controllers
    ├── middlewares/   # Custom middlewares
    └── package.json   # Backend dependencies
```

## Technologies Used

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- React Hot Toast
- React Icons
- React Scroll

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cookie Parser
- CORS
- Dotenv

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
cd restaurantreservation
```

2. Frontend Setup:

```bash
cd frontend
npm install
```

3. Backend Setup:

```bash
cd backend
npm install
```

4. Environment Configuration:
   Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

## Running the Application

1. Start the Backend Server:

```bash
cd backend
npm run dev
```

2. Start the Frontend Development Server:

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:5000`.

## Features

- User authentication and authorization
- Restaurant reservation management
- Real-time availability checking
- Responsive design
- Interactive user interface

## API Endpoints

The backend provides RESTful API endpoints for:

- User management
- Reservation handling
- Restaurant information
- Table management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
