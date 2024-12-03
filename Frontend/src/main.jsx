import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext.jsx'
import {SocketContextProvider} from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SocketContextProvider>
				<Router>
					<Routes>
						<Route path='/*' element={<App/>}/>
					</Routes>
				</Router>
			</SocketContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
)
