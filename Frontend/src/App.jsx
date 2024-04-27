import { Route,Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
  return (
    <>
    <div className="relative h-screen w-screen bg-black">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
    <div className="h-screen flex  justify-center items-center p-4">
      {/* <Routes>
        <Route exact path="/" element={<Login />} />
       
        <Route exact path="/signup" element={<Signup/>} />
        </Routes> */}
        <Home/>
      </div> 
  </div>
    

    </>
  );
}

export default App;
