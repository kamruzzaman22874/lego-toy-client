import { Rating } from '@smastrom/react-rating';
import { useLoaderData } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';

const AllToyDetails = () => {
	const details = useLoaderData();
	const {
		category,
		image,
		name,
		price,
		quantity,
		sellerName,
		rating,
		description,
		sellerEmail,
	} = details;
	console.log(details);
	return (
		<div className='max-w-lg mx-auto py-8 p-4 shadow-md dark:bg-gray-900 dark:text-gray-100'>
			<div className='space-y-4'>
				<div className='space-y-2'>
					<img
						src={image}
						alt=''
						className='block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500'
					/>
					<div className='flex items-center text-lg text-bold'>
						<h2>
							<span className='text-lg font-semibold'>Toy Name</span>:{' '}
							<span className='font-bold'>{name}</span>
						</h2>
					</div>
				</div>
				<div className='space-y-2'>
					<span rel='noopener noreferrer' href='#' className='block'>
						<h3 className=''>
							<span className='text-lg font-semibold'>Category</span> :
							<span className='text-lg font-bold'> {category}</span>
						</h3>
					</span>
					<p className='leading-snug dark:text-gray-400'>
						<span className='text-lg font-semibold'>Description:</span>{' '}
						<span className='font-bold'>{description}</span>
					</p>
					<p className='leading-snug dark:text-gray-400'>
						<span className='text-lg font-semibold'>Price:</span>{' '}
						<span className='font-bold'>${price}</span>
					</p>
					<p className='leading-snug dark:text-gray-400'>
						<span className='text-lg font-semibold'>Quantity:</span>{' '}
						<span className='font-bold'>{quantity}</span>
					</p>
					<p className='leading-snug dark:text-gray-400'>
						<span className='text-lg font-semibold'>Seller Name:</span>
						<span className='font-bold'>{sellerName}</span>
					</p>
					<div>
						<p className='flex justify-between items-center leading-snug dark:text-gray-400'>
							<div className='flex items-center'>
								<HiOutlineMail className='text-xl mr-2 text-green-500'></HiOutlineMail>
								<span>
									<span className='text-lg font-semibold'>Seller Email:</span>
									<span className='font-bold'>{sellerEmail}</span>
								</span>
							</div>
							<div>
								<span className='flex justify-between'>
									<Rating
										style={{ maxWidth: 100 }}
										value={rating}
										rating={rating}
										readOnly
									/>
									<p className='ml-2'>{rating}</p>
								</span>
							</div>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllToyDetails;
