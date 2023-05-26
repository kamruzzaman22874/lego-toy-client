import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import router from './routers/Route.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvider>
		<ToastContainer />
	</React.StrictMode>
);
