import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

export default function GuessLayout() {
    const { user, token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div className="w-full">
            <div className="w-full ">
                <div className="">Guess</div>
                <Outlet />
            </div>
        </div>
    );
}
