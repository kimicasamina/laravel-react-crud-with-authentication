import React from "react";
import { Outlet } from "react-router-dom";

export default function GuessLayout() {
    return (
        <div className="w-full">
            <div className="w-full ">
                <div className="">Guess</div>
                <Outlet />
            </div>
        </div>
    );
}
