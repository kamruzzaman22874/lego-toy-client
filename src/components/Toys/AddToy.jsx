import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import addToToy from '../../assets/images/baby2.png';
import { AuthContext } from '../../providers/AuthProvider';
import Hook from '../Hooks/Hooks';
const AddToy = () => {
	Hook('AddToy');
	const { register, handleSubmit } = useForm();
	const { user } = useContext(AuthContext);
	const onSubmit = (toy) => {
		console.log(toy);
		fetch('https://lego-toy-server.vercel.app/legoToys', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(toy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged === true) {
					toast('data post successfully');
				}
			});
	};
	return (
		<div className='p-5'>
			<div className='flex rounded justify-center items-center shadow-xl border-2'>
				<img className='w-1/2 h-96  px-5 py-4 rounded' src={addToToy} alt='' />
				<div className='w-1/2'>
					<h2 className='text-4xl font-bold'>Add To Toy</h2>
				</div>
			</div>
			<div className='py-20'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='space-y-4 shadow-xl py-4'>
					<div className='grid grid-cols-2 gap-4 w-3/4 mx-auto py-3'>
						<div>
							<label htmlFor=''>Name</label> <br />
							<input
								{...register('name')}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<div>
							<label htmlFor=''>Photo Url</label> <br />
							<input
								{...register('image')}
								className='bg-transparent bg-slate-400 p-2 rounded  w-full border'
							/>
						</div>
						<div>
							<label htmlFor=''>Seller Name</label> <br />
							<input
								{...register('sellerName')}
								defaultValue={user.displayName}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<div>
							<label htmlFor=''>Seller Email</label> <br />
							<input
								{...register('sellerEmail')}
								defaultValue={user.email}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<div>
							<label className='mb-2'>Category</label> <br />
							<select
								className='bg-transparent bg-slate-400 p-2 mt-1 rounded w-full border'
								{...register('category')}>
								<option value='Bath Toys'>Select Category</option>
								<option value='Bath Toys'>Bath Toys</option>
								<option value='Figures Play'>Learning Toys</option>
								<option value='Musical'>Musical</option>
							</select>
						</div>
						<div>
							<label htmlFor=''>Price</label> <br />
							<input
								{...register('price')}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<div>
							<label htmlFor=''>Rating</label> <br />
							<input
								{...register('rating')}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<div>
							<label htmlFor=''>Quantity</label> <br />
							<input
								{...register('quantity')}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<div>
							<label htmlFor=''>Description</label> <br />
							<input
								{...register('description')}
								className='bg-transparent bg-slate-400 p-2 rounded w-full border'
							/>
						</div>
						<input
							className='bg-pink-600 p-2 rounded cursor-pointer text-lg text-white font-semibold font-roboto'
							type='submit'
							value='Submit'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddToy;
