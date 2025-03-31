# Building an Asynchronous API with Node.js (Express) and Vite (React)

- Create an API in Node.js using Express that handles asynchronous operations (e.g., fetching data with delays).
- Build a React frontend using Vite to demonstrate asynchronous API calls with loading states.

### Backend (Express Server) Setup

``` sh
mkdir server
cd server
npm init -y
npm install express cors nodemon
```

###  Frontend (Vite + React) Setup
``` sh
npm create vite@latest client -- --template react
cd client
npm install
npm run dev
```

### Server Test Route
http://localhost:5000/api/data

### Client Route
http://localhost:5173/