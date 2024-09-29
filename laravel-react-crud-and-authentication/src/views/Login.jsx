import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../context/contextProvider";

export default function Login() {
    const { setUser, setToken } = useStateContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState(null);

    async function Submit(e) {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                console.log("DATA: ", data);
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                console.log("ERROR:", response);
                if (response && response.status === 422) {
                    setMessage(response.data.message);
                    setErrors(response.data.errors);
                }
            });
    }

    return (
        <div className="w-full h-full sm:max-w-[60%] mx-auto flex justify-center items-center">
            <div className="form border p-8 rounded-sm shadow-sm w-full -mt-[100px] flex flex-col gap-y-4">
                <h1 className="text-3xl font-semibold text-center mb-4 text-purple-600">
                    Login to your Account
                </h1>

                {!errors && message && (
                    <div className="text-sm text-red-400">
                        <p>{message}</p>
                    </div>
                )}
                <form className="flex flex-col gap-y-4" onSubmit={Submit}>
                    <input
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                    />
                    {errors && errors.email
                        ? errors.email.map((err, index) => (
                              <small
                                  key={index}
                                  className="text-sm text-red-400"
                              >
                                  {err}
                              </small>
                          ))
                        : null}

                    <input
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    {errors && errors.password
                        ? errors.password.map((err, index) => (
                              <small
                                  key={index}
                                  className="text-sm text-red-400"
                              >
                                  {err}
                              </small>
                          ))
                        : null}
                    <div className="flex flex-col gap-y-4 mt-4">
                        <button
                            type="submit"
                            className="rounded-sm px-4 py-2 bg-purple-600 border text-white shadow-sm cursor-pointer hover:bg-neutral-800 "
                        >
                            Login
                        </button>
                        <p className="text-sm ">
                            Not Registered?
                            <Link
                                className="text-blue-600 ml-2"
                                to={"/register"}
                            >
                                Create a New account.
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
