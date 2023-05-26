import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import AddToy from '../components/Toys/AddToy';
import AllToyDetails from '../components/Toys/AllToyDetails';
import AllToys from '../components/Toys/AllToys';
import MyToys from '../components/Toys/MyToys';
import MainLayout from '../layouts/MainLayout';
import Error from '../pages/Error/Error';
import Home from '../pages/SharedPages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <Error></Error>,
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
			{
				path: '/login',
				element: <SignIn></SignIn>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/addToy',
				element: (
					<PrivateRoutes>
						<AddToy></AddToy>
					</PrivateRoutes>
				),
			},
			{
				path: '/allToys',
				element: <AllToys></AllToys>,
			},
			{
				path: '/myToys',
				element: (
					<PrivateRoutes>
						<MyToys></MyToys>
					</PrivateRoutes>
				),
			},
			{
				path: '/allToyDetails/:id',
				element: (
					<PrivateRoutes>
						<AllToyDetails></AllToyDetails>
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`https://lego-toy-server.vercel.app/legoToys/${params.id}`),
			},
			// {
			// 	path: '/toyCategory/:category',
			// 	element: <Category></Category>,
			// 	loader: ({ params }) => fetch(`https://lego-toy-server.vercel.app/${params.category}`),
			// },
		],
	},
]);
export default router;
