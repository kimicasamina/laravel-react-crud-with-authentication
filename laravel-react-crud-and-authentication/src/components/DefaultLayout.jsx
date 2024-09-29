import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import { useStateContext } from "../context/contextProvider";
import axiosClient from "../axiosClient";
export default function DefaultLayout() {
    const { user, setUser, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    return (
        <div className="w-full h-screen ">
            <Header />
            <Outlet />
        </div>
    );
}
