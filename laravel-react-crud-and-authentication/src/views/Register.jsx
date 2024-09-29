import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../context/contextProvider";

export default function Register() {
    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    async function Submit(e) {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };
        console.log("Payload:", payload);

        axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                console.log("DATA: ", data);
                setUser(data.user);
                setToken(data.token);
                return <Navigate to="/" />;
            })
            .catch((err) => {
                const response = err.response;
                console.log("RESPONSE: ", response);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    }

    return (
        <div className="w-full h-full sm:max-w-[60%] mx-auto flex justify-center items-center">
            <div className="form border p-8 rounded-sm shadow-sm w-full -mt-[100px] flex flex-col gap-y-4">
                <h1 className="text-3xl font-semibold text-center mb-4 text-purple-600">
                    Create a new Account
                </h1>
                <form className="flex flex-col gap-y-4" onSubmit={Submit}>
                    <input
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        ref={nameRef}
                        type="text"
                        placeholder="Full Name"
                    />
                    {errors && errors.name
                        ? errors.name.map((err, index) => (
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
                        ref={emailRef}
                        type="email"
                        placeholder="Email Address"
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
                    <input
                        className="border rounded-sm p-2 outline-purple-600 text-purple-600"
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Repeat Password"
                    />
                    {errors && errors.password_confirmation
                        ? errors.password_confirmation.map((err, index) => (
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
