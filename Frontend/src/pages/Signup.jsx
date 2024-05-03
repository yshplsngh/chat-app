import React from "react";
import { Gender } from "./Gender";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup.js";

export const Signup = () => {
   const{signup,Loading}=useSignup();

  const [Input, setInput] = useState({
    fullname:'',
    username:'',
    password:'',
    confirmpassword:'',
    gender:''
  });

  const handleSignup=async(e)=>{
    e.preventDefault();
    
    await signup(Input)

  }
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter border-opacity-0">
        <h1 className="text-3xl text-center">
          Signup <span className="text-blue-400">Chat App</span>
        </h1>
        <form className="mt-3" onSubmit={handleSignup}>
          <div>
            <label className="">
              <span className="">Fullname</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center outline-none"
              type="text"
              placeholder="enter your name"
              value={Input.fullname}
              onChange={(e)=>setInput({...Input,fullname:e.target.value})}
            />
          </div>
          <div className="mt-3">
            <label>
              <span>Username</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center outline-none"
              type="text"
              placeholder="Enter username"
              value={Input.username}
              onChange={(e)=>setInput({...Input,username:e.target.value})}
            />
          </div>
          <div className="mt-3">
            <label>
              <span>Password</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center outline-none"
              type="password"
              placeholder="Enter password"
              value={Input.password}
              onChange={(e)=>setInput({...Input,password:e.target.value})}
            />
          </div>
          <div className="mt-3">
            <label>
              <span>Confirm Password</span>
            </label>
            <input
              className="mt-3 w-full h-10 rounded-lg text-center outline-none"
              type="password"
              placeholder="Confirm password"
              value={Input.confirm}
              onChange={(e)=>setInput({...Input,confirmpassword:e.target.value})}
            />
          </div>

          <Gender Input={Input} setInput={setInput} />
          <div className="mt-3">
            <Link to="/login" className="hover:underline hover:text-blue-300 ">
              already have a account?
            </Link>
          </div>
          <div className="mt-3">
           
            <button
              className="mt-3 w-full h-10 rounded-lg text-center bg-white"
              type="password"
              placeholder="Confirm password"
              disabled={Loading}
            >
              {Loading?<i class="fa-thin fa-spinner"></i>:"Signup"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
