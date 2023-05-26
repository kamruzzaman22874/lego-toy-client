import spinner from '../../assets/images/spinner.jpg';
const Spinner = () => {
	return (
		<div className='flex justify-center items-center'>
			<div className='h-screen mx-auto py-6'>
				<img className='h-[400px] rounded' src={spinner} alt='' />
			</div>
		</div>
	);
};

export default Spinner;
