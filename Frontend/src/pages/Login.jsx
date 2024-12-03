import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import Button from "../components/Button.jsx";

export const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const {login,loading}=useLogin()

const handleSubmit=async(e)=>{
e.preventDefault();
await login(username,password)
}
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-black">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter border-opacity-0">
        <h1 className="text-3xl text-center">
          Login <span className="text-blue-400">Chat App</span>
        </h1>
        <form onSubmit={handleSubmit} className="m-4 space-y-4">
          <div className="">
            <label className="p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className=" mt-3 text-center w-full rounded-lg h-10"
              type="text "
              placeholder="enter your username"
              value={username}
              onChange={(e)=>setusername(e.target.value)}
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
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="hover:underline hover:text-blue-300 inline-block "
          >
            don&apos;t have an account
          </Link>
          <Button
              type={'submit'}
              text={'Login'}
              variant={'outlineB'}
              className={'h-10'}
          />
        </form>
      </div>
    </div>
  );
};
