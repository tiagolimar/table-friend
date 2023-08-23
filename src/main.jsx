import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './main.css'

import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import EditUser from "./pages/EditUser.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Fotos from './pages/Fotos';

const router = createBrowserRouter([
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
        errorElement: <div className="container"><h1>Xiiii, failhô</h1></div>,
    },
    {
        path: "/fotos",
        element: <Fotos />,
        errorElement: <Error />,
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
