import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Link } from 'react-router-dom';

const Banner = () => {
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 500);
				}
				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		]
	);

	return (
		<>
			<div ref={sliderRef} className='keen-slider -z-10'>
				<div className='keen-slider__slide number-slide1'>
					<div
						style={{
							backgroundImage: `url('https://i.ibb.co/XS7BCS0/banner01.jpg')`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundBlendMode: 'multiply',
						}}
						className={`bg-gray-700 w-full h-screen`}>
						<div className='h-full flex text-center items-center p-5'>
							<div className='space-y-4 mx-auto w-3/4'>
								<h2 className='text-6xl text-slate-200'>
									Pick the best toy for your kid
								</h2>
								<p className='text-white text-lg'>
									We offer a premium service, wether you are shopping <br /> at
									one of our flagship stores or via our website.
								</p>
								<Link className='block ' to=''>
									<button className='py-3 px-10 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500'>
										Shop now
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='keen-slider__slide number-slide2'>
					<div
						style={{
							backgroundImage: `url('https://i.ibb.co/N9Psg75/banner02.jpg')`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundBlendMode: 'multiply',
						}}
						className={`bg-gray-700 w-full h-screen`}>
						<div className='  h-full flex text-center items-center p-5'>
							<div className='space-y-4 mx-auto w-3/4'>
								<h2 className='text-6xl text-slate-200'>
									Pick the best toy for your kid
								</h2>
								<p className='text-white text-lg'>
									We offer a premium service, wether you are shopping <br /> at
									one of our flagship stores or via our website.
								</p>
								<Link className='block ' to=''>
									<button className='py-3 px-10 bg-teal-500 rounded-full  text-white hover:bg-rose-600 duration-500'>
										Shop now
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
