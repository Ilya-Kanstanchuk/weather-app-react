# Weather App (React + Node.js)

A full-stack weather application built with React (Vite) on the front-end and Node.js/Express with MongoDB on the back-end. Users can search for weather data, view forecasts, register/login, and save favorite cities.

## Features

- User registration & authentication (JWT)
- Search weather by city
- 4-day forecast display
- Save, list, and remove favorite cities
- Responsive UI with Tailwind CSS

## Live Demo

- Frontend: https://weather-app-react-gamma-henna.vercel.app/
- Backend API: https://weather-app-react-8xjd.onrender.com/api

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS, Context API, Axios
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt
- Deployment: Vercel (frontend), Render (backend)

## Project Structure

```
weather-app-react/
├── client/         # React frontend
└── server/         # Express backend
```

## Getting Started

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| POST   | /api/auth/register   | Register a new user             |
| POST   | /api/auth/login      | Login and return JWT token      |
| GET    | /api/city/list       | List saved cities (protected)   |
| POST   | /api/city/add        | Add a city (protected)          |
| DELETE | /api/city/delete/:id | Delete a saved city (protected) |

## License

MIT License
