import { useRoutes } from "react-router-dom";
import React from 'react'
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";

export default function router() {
    return useRoutes([
        { path: "/", element: <App /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/history", element: <History />}
      ]);
}
