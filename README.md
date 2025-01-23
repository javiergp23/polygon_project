
# Fullstack Project: Frontend & Backend

This is a fullstack project consisting of a **frontend**developed with React and a **backend** with Node.js and Express. 

## Features

### Backend

- **Express**: Creation of web servers and APIs, providing efficient handling of routes, middleware, and HTTP requests.
- **dotenv**: Allows loading environment variables from a .env file into the runtime environment.
- **Cors**: Middleware that configures and allows HTTP requests across different domains (Cross-Origin Resource Sharing).
- **API Polygon.io** An API providing access to real-time or historical financial and market data.

### Frontend
- **Framework**: React with Vite.
- **Librerías**: Material UI for styles, Axios for HTTP requests.
- **React-svg**: Handles SVG images.

## Installation

### Prerequisites
- Node.js (v18 or higher)
- NPM o Yarn instalado

### Clone the repository

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

Navigate to the backend folder:

cd back-end

Install backend dependencies:

npm install
Set up the .env file in the backend's root directory with the necessary variables, such as the server port and database credentials (if required).

Run the backend in development mode:

npm run start
The backend server will run on port 5000 by default (configurable in server.js).

Frontend
Navigate to the frontend folder:

cd frontend
Install frontend dependencies:

npm install
Run the frontend in development mode:

npm run dev
The frontend will run on port 5173 by default (configurable in vite.config.js).

root/  
├── back-end/  
│   ├── node_modules/  
│   ├── .env  
│   ├── package.json  
│   ├── server.js
│   ├── utils/
│   ├── controllers/
│   ├── routes/
├── front-end/
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── components/
│       ├── services/
└── README.md

