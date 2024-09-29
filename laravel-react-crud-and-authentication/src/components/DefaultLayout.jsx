import React from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="w-full ">
            <div className="">Default</div>
            <Outlet />
        </div>
    );
}
