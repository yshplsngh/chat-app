import {Navigate, Route, Routes} from "react-router-dom";
import "./App.css";
import {Login} from "./pages/Login.jsx";
import {Signup} from "./pages/Signup.jsx";
import {Home} from "./pages/Home.jsx";
import {useAuthContext} from "./context/AuthContext.jsx";
import Landing from "./pages/Landing.jsx";
import Layout from "./Layout.jsx";

function App() {
	const {Authuser} = useAuthContext();

	return (
		<Layout>
			<Routes>
				<Route
					exact
					path="/"
					element={Authuser ? <Home/> : <Navigate to="/landing"/>}
				/>
				<Route
					exact
					path="/login"
					element={Authuser ? <Navigate to="/"/> : <Login/>}
				/>

				<Route
					exact
					path="/signup"
					element={Authuser ? <Navigate to="/"/> : <Signup/>}
				/>
				<Route
					exact
					path="/landing"
					element={Authuser ? <Navigate to="/"/> : <Landing/>}
				/>
				<Route
					path="/*"
					element={<div className=" text-white">missing</div>}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
