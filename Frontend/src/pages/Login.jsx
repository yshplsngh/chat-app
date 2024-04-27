import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter border-opacity-0">
        <h1 className="text-3xl text-center">
          Login <span className="text-blue-400">Chat App</span>
        </h1>
        <form className="m-4">
          <div className="">
            <label className="p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className=" mt-3 text-center w-full rounded-lg h-10"
              type="text "
              placeholder="enter your username"
            />
          </div>
          <div className="mt-3 mb-3">
            <label className="p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className=" mt-3 text-center w-full rounded-lg h-10"
              type="password"
              placeholder="enter password"
            />
          </div>
          <Link
            to="/signup"
            className="hover:underline hover:text-blue-300 inline-block "
          >
            don't have an account
          </Link>
          <div className="mt-3 ">
            <button className=" mt-3 text-center w-full rounded-lg h-10 bg-white hover:text-gray-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
