import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuessLayout from "./components/GuessLayout";
import Login from "./views/Login";
import Register from "./views/Register";
import Users from "./views/Users";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/users",
                element: <Users />,
            },
        ],
    },
    {
        path: "/",
        element: <GuessLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);
