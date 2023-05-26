import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../../pages/Spinner/Spinner';
import { AuthContext } from '../../providers/AuthProvider';

const OpenModal = ({ modalData, open, setOpen }) => {
	const { loading } = useContext(AuthContext);
	if (loading) {
		return <Spinner></Spinner>;
	}

	console.log(modalData);
	// const {price, quantity , description} = modalData
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const price = form.price.value;
		const quantity = form.quantity.value;
		const description = form.description.value;
		const updatedMyToys = {
			price,
			quantity,
			description,
		};
		console.log(updatedMyToys);
		fetch(`https://lego-toy-server.vercel.app/myToys/${modalData._id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(updatedMyToys),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				if (result.modifiedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'update has successfully done',
						showConfirmButton: false,
						timer: 1500,
					});
					setOpen(!open);
				}
			});
	};
	return (
		<div>
			{/* Put this part before </body> tag */}
			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='my-modal-3'
						className='btn btn-sm btn-circle absolute right-2 top-2'>
						✕
					</label>
					<form onSubmit={handleSubmit} className='max-w-md mx-auto'>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2'>
								Price
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								name='price'
								defaultValue={modalData?.price}
								type='number'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2'>
								Quantity
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								name='quantity'
								defaultValue={modalData?.quantity}
								type='number'
							/>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-700 text-sm font-bold mb-2'>
								Description
							</label>
							<textarea
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								name='description'
								defaultValue={modalData?.description}
								rows='4'></textarea>
						</div>
						<div className='flex items-center justify-end'>
							<div>
								<button
									className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
									type='submit'>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default OpenModal;
