# Building a Real-Time Clock with Node.js Express and React

- Backend: A Node.js Express server sends the current time at /time.
- Frontend: A Vite-based React app fetches the time every second and displays it.

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
http://localhost:5000/time

### Client Route
http://localhost:5173/