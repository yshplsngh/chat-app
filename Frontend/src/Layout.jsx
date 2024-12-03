import Background from './components/Background.jsx'
import {Toaster} from "react-hot-toast";
// import Header from
import {useLocation} from 'react-router-dom';
import PropTypes from "prop-types";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Layout = ({children}) => {
	const location = useLocation();
	const omitHeader = ['/login'];
	const pickBG = ['/landing','/login'];

	const shouldOmitHeader = () => {
		return omitHeader.some((path) => location.pathname === path);
	};

	return (
		<>
			{/*show bg only for pickBG arrays endpoints*/}
			{pickBG.includes(location.pathname) && <Background/>}

			{/*remove header only for omitHeader arrays endpoint*/}
			{!shouldOmitHeader() && <Header/>}

			<div
				style={{position: 'relative', zIndex: 2}}
				// show black bg for all endpoints other than pickBG arrays one
				className={`${!pickBG.includes(location.pathname) ? 'bg-background-dark' : ''} flex justify-center`}
			>
				<div className={'min-h-[45rem] w-[80rem]'}>{children}</div>

			</div>
			<Footer/>
			<Toaster/>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
