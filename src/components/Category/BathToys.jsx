import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
const BathToys = ({ toy }) => {
	const {_id, name, image, price, rating, } = toy;
	return (
		<div className='rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100'>
			<div className='flex items-center justify-between p-3'></div>
			<img
				src={image}
				alt=''
				className='object-cover object-center w-full h-72 dark:bg-gray-500'
			/>
			<div className='p-3'>
				<div>
					<h2 className='text-lg font-semibold'>Name: {name}</h2>
					<p>Price: ${price}</p>
					<div className='flex justify-between items-center'>
						<span>
							<Rating
								style={{ maxWidth: 100 }}
								value={rating}
								rating={rating}
								readOnly
							/>
						</span>
						<span>
							<Link
								to={`/allToyDetails/${_id}`}
								className='btn-outline hover:bg-pink-600 bg-pink-500 text-cyan-200 outline-none py-2 px-4 rounded'>
								View Details
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BathToys;
