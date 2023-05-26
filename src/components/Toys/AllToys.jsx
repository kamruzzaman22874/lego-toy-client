import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../pages/Spinner/Spinner';
import { AuthContext } from '../../providers/AuthProvider';
import Hook from '../Hooks/Hooks';

const AllToys = () => {
	Hook('AllToys');
	const [toys, setToys] = useState([]);
	const [search, setSearch] = useState('');
	const [showAll, setShowAll] = useState(false);
	const { loading } = useContext(AuthContext);

	useEffect(() => {
		fetch('https://lego-toy-server.vercel.app/legoToys')
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, []);
	if (loading) {
		return <Spinner></Spinner>;
	}
	const handleSearch = () => {
		fetch(`https://lego-toy-server.vercel.app/searchToy/${search}`)
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	};
	const handleShowAll = () => {
		fetch('https://lego-toy-server.vercel.app/showToy')
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
				setShowAll(true);
			});
	};
	return (
		<div>
			<div className='text-center my-3'>
				<input
					onChange={(e) => setSearch(e.target.value)}
					type='text'
					placeholder='Type here'
					className='input input-bordered input-primary w-full max-w-xs'
				/>
				<button
					onClick={handleSearch}
					className='ml-2 px-4 py-3 bg-pink-600 hover:bg-pink-800 rounded text-white '>
					Search
				</button>
			</div>
			<div className='w-11/12 mx-auto my-5'>
				<div className='overflow-x-auto w-full'>
					<table className='table w-full'>
						{/* head */}
						<thead>
							<tr>
								<th>Sl.</th>
								<th>Seller</th>
								<th>Name</th>
								<th>Category</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{toys.map((toy, idx) => (
								<>
									<tr key={toy._id}>
										<td>
											<div className='flex items-center space-x-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														{idx + 1}
													</div>
												</div>
											</div>
										</td>
										<td>{toy.sellerName}</td>
										<td>
											<div>
												<div className='font-bold'>{toy.name}</div>
											</div>
											<br />
										</td>
										<td>{toy.category}</td>
										<td>{toy.price}</td>
										<td>{toy.quantity}</td>
										<th>
											<Link to={`/allToyDetails/${toy._id}`}>
												<button className='bg-pink-600 hover:bg-pink-800 rounded text-white px-3 py-2 '>
													view details
												</button>
											</Link>
										</th>
									</tr>
								</>
							))}
						</tbody>
					</table>
					{!showAll && (
						<div className='flex justify-center '>
							<button
								onClick={handleShowAll}
								className='bg-pink-600 py-3 px-4 rounded text-white'>
								Show All
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AllToys;
