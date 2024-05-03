import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useSignup = () => {
  const [Loading, setLoading] = useState(false);
  const { setAuthuser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;
    setLoading(true);
    try {
     
      const res = await fetch("http://localhost:4600/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();
      // console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      //localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthuser(data);

      //context
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, signup };
};

const handleInputError = ({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) => {
  if (!fullname || !username || !password || !gender || !confirmpassword) {
    toast.error("please fill all field");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("password don't match");
    return false;
  }
  return true;
};
