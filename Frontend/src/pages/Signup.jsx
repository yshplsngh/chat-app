import React from "react";
import { Gender } from "./Gender";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter border-opacity-0">
        <h1 className="text-3xl text-center">
          Login <span className="text-blue-400">Chat App</span>
        </h1>
        <form className="mt-3">
          <div>
            <label className="">
              <span className="">Fullname</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center"
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className="mt-3">
            <label>
              <span>Username</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center"
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div className="mt-3">
            <label>
              <span>Password</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mt-3">
            <label>
              <span>Confirm Password</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center"
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <Gender />
          <div className="mt-3">
            <Link to="/" className="hover:underline hover:text-blue-300 ">
              already have a account?
            </Link>
          </div>
          <div className="mt-3">
           
            <button
              className="mt-3 w-full h-10 rounded-lg text-center bg-white"
              type="password"
              placeholder="Confirm password"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
