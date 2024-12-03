import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Landing from "./pages/Landing.jsx";

function App() {
  const { Authuser } = useAuthContext();
  return (
    <>
      <div className="relative h-screen w-screen bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="h-screen flex  justify-center items-center p-4">
          <Routes>
            <Route
              exact
              path="/"
              element={Authuser ? <Home /> : <Navigate to="/landing" />}
            />
            <Route
              exact
              path="/login"
              element={Authuser ? <Navigate to="/" /> : <Login />}
            />

            <Route
              exact
              path="/signup"
              element={Authuser ? <Navigate to="/" /> : <Signup />}
            />
            <Route
              exact
              path="/landing"
              element={Authuser ? <Navigate to="/" /> : <Landing />}
            />
            <Route
              path="/*"
              element={<div className=" text-white">missing</div>}
            />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
