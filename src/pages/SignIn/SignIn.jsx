import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPage from '../../assets/images/login-page.png';
import { AuthContext } from '../../providers/AuthProvider';
import { eye } from 'react-icons-kit/icomoon/eye';
import { eyeBlocked } from 'react-icons-kit/icomoon/eyeBlocked';
import Icon from 'react-icons-kit';
import { toast } from 'react-toastify';

const SignIn = () => {
	const { login, googleSingIn, githubSignIn } = useContext(AuthContext);
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eyeBlocked);
	const [error, setError] = useState();
	const [wrong, setWrong] = useState();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		if (password.length < 6) {
			setWrong('please give the correct password');
		}
		login(email, password)
			.then((result) => {
				const userLogin = result.user;
				if (userLogin) {
					toast('successfully login');
					navigate(from, { replace: true });
					form.reset();
				}
			})
			.catch((err) => {
				setError(err);
				toast.error('Login failed please try again');
			});
	};
	const handleGoogleSignIn = () => {
		googleSingIn().then((result) => {
			toast('successfully login');
			navigate(from, { replace: true });
		})
			.catch(err => {
				setError(err);
				toast.error('Login failed please try again');
			
		})
	};
	const handleGithubSignIn = () => {
		githubSignIn((result) => {
			toast('successfully login with github');
			navigate(from, { replace: true });
		}).catch((err) => {
			setError(err);
			toast.error('Login failed please try again');
		});
	};
	const handlePassword = () => {
		if (type === 'password') {
			setIcon(eye);
			setType('text');
		} else {
			setIcon(eyeBlocked);
			setType('password');
		}
	};
	return (
		<div className='md:flex justify-center items-center px-10 shadow-lg py-5'>
			<div className='mr-5 w-1/2'>
				<img
					className='rounded-full shadow-xl w-[500px]'
					src={loginPage}
					alt=''
				/>
			</div>
			<div className='px-10 text-cyan-600 flex justify-center rounded '>
				<div className='w-ful shadow-xl max-w-md p-8 space-y-3 rounded-xl  bg-[#0a192f] dark:bg-gray-900 dark:text-gray-100'>
					<h1 className='text-2xl font-bold text-center mb-10'>Login</h1>
					<form
						onSubmit={handleLogin}
						className='space-y-6 ng-untouched ng-pristine ng-valid '>
						<div className='space-y-1 text-sm'>
							<label className='block dark:text-gray-400'>Email</label>
							<input
								type='text'
								name='email'
								placeholder='Email'
								className='w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
							/>
						</div>
						<div className='space-y-1 text-sm'>
							<label className='block dark:text-gray-400'>Password</label>
							<input
								type={type}
								name='password'
								placeholder='password'
								className='w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
							/>

							<span className='relative' onClick={handlePassword}>
								<Icon
									className='absolute right-0 bottom-1 w-10 text-xl'
									icon={icon}></Icon>
							</span>
							{error && (
								<h2 className='text-lg font-bold text-red-800 '>
									Please provide the valid user
								</h2>
							)}
							
							<div className='flex justify-end text-xs dark:text-gray-400'>
								<a rel='noopener noreferrer' href='#'>
									Forgot Password?
								</a>
							</div>
						</div>
						<button className='block w-full shadow-lg hover:bg-pink-600 text-white rounded p-3 text-center  dark:text-gray-900 dark:bg-violet-400'>
							Sign in
						</button>
					</form>
					<div className='flex items-center pt-4 space-x-1'>
						<div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
						<p className='px-3 text-sm dark:text-gray-400'>
							Login with social accounts
						</p>
						<div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
					</div>
					<div className='flex justify-center space-x-4 shadow-lg'>
						<button
							onClick={handleGoogleSignIn}
							aria-label='Log in with Google'
							className='p-3 rounded-sm hover:bg-pink-600 text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 32 32'
								className='w-5 h-5 fill-current'>
								<path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
							</svg>
						</button>
						<button
							onClick={handleGithubSignIn}
							aria-label='Log in with GitHub'
							className='p-3 rounded-sm hover:bg-pink-600 text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 32 32'
								className='w-5 h-5 fill-current'>
								<path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
							</svg>
						</button>
					</div>
					<p className=' text-center text-md sm:px-6 dark:text-gray-400'>
						Do not have an account ?
						<Link className='ml-2 underline' to='/signup'>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
