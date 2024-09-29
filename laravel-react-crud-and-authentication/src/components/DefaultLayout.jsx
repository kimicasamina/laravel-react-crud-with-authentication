import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="w-full h-screen ">
            <header className="flex justify-between items-center">
                <h1 className="">Logo</h1>
                <h1 className="">{user.name} </h1>
                <ul className="flex gap-x-2">
                    <button className="btn border rounded-sm py-1 px-4 bg-purple-700 text-white hover:bg-white hover:border-purple-600 hover:text-purple-600 ">
                        Login
                    </button>
                    <button className="btn border rounded-sm py-1 px-4 bg-purple-700 text-white hover:bg-white hover:border-purple-600 hover:text-purple-600 ">
                        Logout
                    </button>
                </ul>
            </header>
            <Outlet />
        </div>
    );
}
