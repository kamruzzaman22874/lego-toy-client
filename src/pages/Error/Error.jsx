import { Link } from 'react-router-dom';
import error from '../../assets/images/error.jpg';
const Error = () => {
	return (
		<div className='bg-gray-900 h-screen'>
			<div>
				<div className='flex justify-center items-center h-full py-12'>
					<img className='w-3/4 h-96 rounded' src={error} alt='' />
				</div>
				<div className='text-center'>
					<Link to='/'>
						<button className='bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded text-white'>
							Back to Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Error;
