import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="w-full ">
            <div className="">Default</div>
            <Outlet />
        </div>
    );
}
