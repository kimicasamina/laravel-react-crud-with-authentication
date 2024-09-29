import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function Submit(e) {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log("Payload:", payload);
    }

    return (
        <div className="w-full h-full sm:max-w-[60%] mx-auto flex justify-center items-center">
            <div className="form border p-8 rounded-sm shadow-sm w-full -mt-[100px] flex flex-col gap-y-4">
                <h1 className="text-3xl font-semibold text-center mb-4 text-purple-600">
                    Create a new Account
                </h1>
                <form className="flex flex-col gap-y-4" onSubmit={Submit}>
                    <input
                        type="text"
                        ref={nameRef}
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        placeholder="Enter your name"
                    />
                    <input
                        type="text"
                        ref={emailRef}
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        placeholder="Enter your email"
                    />
                    <input
                        type="password"
                        ref={passwordRef}
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        placeholder="Enter your password"
                    />
                    <div className="flex flex-col gap-y-4 mt-4">
                        <button
                            type="submit"
                            className="rounded-sm px-4 py-2 bg-purple-600 border text-white shadow-sm cursor-pointer hover:bg-neutral-800 "
                        >
                            Register
                        </button>
                        <p className="text-sm ">
                            Already Registered?
                            <Link className="text-blue-600 ml-2" to={"/login"}>
                                Login to your account.
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
