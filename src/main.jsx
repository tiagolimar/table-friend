/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './main.css'

import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import EditUser from "./pages/EditUser.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Fotos from './pages/Fotos';
import App from './App.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/usuarios",
                element: <Users />,
                errorElement: <Error />,
            },
            {
                path: "/usuarios/:id",
                element: <EditUser />,
                errorElement: <Error />,
            },
            {
                path: "/fotos",
                element: <Fotos />,
                errorElement: <Error />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
