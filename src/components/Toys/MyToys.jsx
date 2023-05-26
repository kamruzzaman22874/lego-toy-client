import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../../pages/Spinner/Spinner';
// import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Hook from '../Hooks/Hooks';
import OpenModal from '../OpenModal/OpenModal';

const MyToys = () => {
	Hook('MyToys');
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		<Spinner></Spinner>
	}
	// console.log(user);
	// const myToys = useLoaderData()
	// console.log(myToys);
	const [toys, setToys] = useState([]);

	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState();
	const [sort, setSort] = useState(1);

	// const [removes, setRemoves] = useState([]);
	useEffect(() => {
		fetch(
			`https://lego-toy-server.vercel.app/myToyEmailSort?email=${user?.email}&sort=${sort}`
		)
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, [sort, open]);

	const handleDelete = (_id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://lego-toy-server.vercel.app/myToys/${_id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
							const remaining = toys.filter((toy) => toy._id !== _id);
							setToys(remaining);
						}
					});
			}
		});
	};
	const handelChange = (e) => {
		const value = e.target.value;
		setSort(value);
	};

	return (
		<div className='w-11/12 mx-auto my-5'>
			<div className='overflow-x-auto w-full'>
				<select
					onChange={handelChange}
					className='px-5 py-1 border-2 border-gray-800 rounded mb-3'
					name=''
					id=''>
					<option value='1'>Ascending Price</option>
					<option value='-1'>Descending Price</option>
				</select>
				<table className='table w-full'>
					{/* head */}
					<thead>
						<tr>
							<th>Image</th>
							<th>Seller</th>
							<th>Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Ratings</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<OpenModal
							open={open}
							setOpen={setOpen}
							modalData={modalData}></OpenModal>
						{toys.map((toy) => (
							<>
								<tr key={toy._id}>
									<td>
										<div className='flex items-center space-x-3'>
											<div className='avatar'>
												<div className='mask mask-squircle w-12 h-12'>
													<img
														src={toy.image}
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
										</div>
									</td>
									<td>{toy.sellerName}</td>
									<td>
										<div className='font-bold'>{toy.name}</div>
									</td>
									<td>{toy.category}</td>
									<td>{toy.price}</td>
									<td>{toy.quantity}</td>
									<td>{toy.rating}</td>
									<td>{toy.description.split(' ', 2)}...</td>
									<th>
										<label
											onClick={() => setModalData(toy)}
											htmlFor='my-modal-3'
											className='cursor-pointer bg-pink-600 hover:bg-pink-700 py-1 px-3 rounded text-white'>
											Edit
										</label>
										<input
											type='checkbox'
											id='my-modal-3'
											className='modal-toggle'
										/>

										<Link>
											<label
												onClick={() => handleDelete(toy._id)}
												className=' cursor-pointer bg-pink-600 hover:bg-pink-700 py-1 px-3 rounded text-white ml-2'>
												Delete
											</label>
										</Link>
									</th>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyToys;
