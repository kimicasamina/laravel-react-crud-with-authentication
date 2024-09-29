import React from "react";
import { useStateContext } from "../context/contextProvider";
import { CiUser } from "react-icons/ci";
import { CiGrid31 } from "react-icons/ci";

import axiosClient from "../axiosClient";
export default function Header() {
    const { user, setUser, setToken } = useStateContext();

    async function onLogout() {
        console.log("logout");

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    }

    return (
        <header className="flex justify-between items-center p-4 bg-neutral-900 text-white">
            <div className="flex w-[140px] items-center gap-x-2">
                <CiGrid31 className="w-6 h-6" />
                Logo
            </div>
            <ul className="flex gap-x-4 items-center">
                <div className="text-xl text-white flex items-center gap-x-2">
                    <CiUser className="w-6 h-6" />
                    {user && user.name}
                </div>
                {user ? (
                    <button
                        className="btn border rounded-sm py-1 px-4 bg-purple-700 text-white hover:bg-white hover:border-purple-600 hover:text-purple-600 "
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="btn border rounded-sm py-1 px-4 bg-purple-700 text-white hover:bg-white hover:border-purple-600 hover:text-purple-600 "
                        // onClick={(e) => onLogout(e)}
                    >
                        Login
                    </button>
                )}
                {/* <div className="flex items-center">
                </div> */}
            </ul>
        </header>
    );
}
