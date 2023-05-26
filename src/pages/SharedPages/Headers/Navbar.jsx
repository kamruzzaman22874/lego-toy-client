import { FaBars, FaTimes } from 'react-icons/fa';
import { useContext, useState } from 'react';
import navbarLogo from '../../../assets/images/small-logo.png';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [nav, setNav] = useState(false);
	const navigate = useNavigate();
	const handleClick = () => setNav(!nav);
	const handleLogout = () => {
		logOut();
		navigate('/login');
		toast.error('Logout successfully done');
	};
	return (
		<div>
			<div className='navbar  w-full h-[80px] flex justify-between items-center bg-pink-600  text-gray-300 md:px-36 px-8 py-4 font-roboto'>
				<div className='flex-1'>
					<h2 className='flex items-center'>
						<img className='text-white' src={navbarLogo} alt='' />
						<h2 className='ml-3 md:text-2xl font-semibold'>
							LEGO <span className='text-purple-800'>TOYS</span>
						</h2>
					</h2>
				</div>
				<div className='flex-none'>
					<ul className='hidden md:flex items-center menu-horizontal px-1 gap-5'>
						<li className='p-3 cursor-pointer rounded font-semibold text-cyan-200 text-lg'>
							<ActiveLink to='/' smooth={true} duration={500}>
								Home
							</ActiveLink>
						</li>
						<li className='p-3 cursor-pointer  rounded font-semibold text-cyan-200 text-lg'>
							<ActiveLink to='/allToys' smooth={true} duration={500}>
								All Toys
							</ActiveLink>
						</li>
						<li className='p-3 cursor-pointer  rounded font-semibold text-cyan-200 text-lg'>
							<ActiveLink to='/blog' smooth={true} duration={500}>
								Blogs
							</ActiveLink>
						</li>
						{user ? (
							<>
								<li className='p-3 cursor-pointer  rounded font-semibold text-cyan-200 text-lg'>
									<ActiveLink to='/myToys' smooth={true} duration={500}>
										My Toys
									</ActiveLink>
								</li>
								<li className='p-3 cursor-pointer  rounded font-semibold text-cyan-200 text-lg'>
									<ActiveLink to='/addToy' smooth={true} duration={500}>
										Add A Toy
									</ActiveLink>
								</li>

								<div
									className='avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary'
									data-tip={user.displayName}>
									<div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
										<img src={user.photoURL} />
									</div>
								</div>

								<button
									className='p-3 cursor-pointer hover:bg-blue-900 rounded font-semibold text-cyan-200 text-lg'
									onClick={handleLogout}>
									Logout
								</button>
							</>
						) : (
							<>
								{/* <li className='p-3 cursor-pointer hover:bg-blue-900 rounded font-semibold text-cyan-200 text-lg'>
									<ActiveLink to='/login' smooth={true} duration={500}>
										Login
									</ActiveLink>
								</li> */}
								<li className='p-3 cursor-pointer  rounded font-semibold text-cyan-200 text-lg'>
									<ActiveLink to='/login' smooth={true} duration={500}>
										Login
									</ActiveLink>
								</li>
							</>
						)}
					</ul>
				</div>

				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>
				<ul
					className={
						!nav
							? 'hidden'
							: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
					}>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='/' smooth={true} duration={500}>
							Home
						</Link>
					</li>

					<li className='py-6 text-4xl shadow-md p-3 hover:bg-blue-900 rounded font-bold'>
						<Link
							onClick={handleClick}
							to='allToys'
							smooth={true}
							duration={500}>
							All Toys
						</Link>
					</li>
					<li className='py-6 text-4xl shadow-md p-3 hover:bg-blue-900 rounded font-bold'>
						<Link
							onClick={handleClick}
							to='myToys'
							smooth={true}
							duration={500}>
							My Toys
						</Link>
					</li>

					<li className='py-6 cursor-pointer text-4xl shadow-md p-3 hover:bg-blue-900 rounded font-bold'>
						<Link to='login' smooth={true} duration={500}>
							Login
						</Link>
					</li>

					<li className='py-6 text-4xl shadow-md p-3 cursor-pointer hover:bg-blue-900 rounded font-bold'>
						<Link
							onClick={handleClick}
							to='addToys'
							smooth={true}
							duration={500}>
							Add A Toy
						</Link>
					</li>
					<li className='py-6 text-4xl shadow-md p-3 hover:bg-blue-900 rounded font-bold'>
						<Link onClick={handleClick} to='blog' smooth={true} duration={500}>
							Blogs
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
