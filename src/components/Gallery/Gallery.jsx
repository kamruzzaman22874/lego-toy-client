import aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Gallery = () => {
	useEffect(() => {
		aos.init();
	}, []);

	return (
		<section className='py-6 dark:bg-gray-800 dark:text-gray-50'>
			<div className='container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 bg-[#0a192f]'>
				<PhotoProvider>
					<PhotoView
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/mDqw1XK/post19-copyright.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/mDqw1XK/post19-copyright.jpg'}
							alt=''
						/>
					</PhotoView>
					<PhotoView
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={`https://i.ibb.co/TrL0sfC/product7-copyright-630x630.jpg`}>
						<img
							data-aos='flip-left'
							src={`https://i.ibb.co/TrL0sfC/product7-copyright-630x630.jpg`}
							alt=''
						/>
					</PhotoView>
					<PhotoView
						data-aos='flip-left'
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/grQ8jNH/product9-copyright-630x630.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/grQ8jNH/product9-copyright-630x630.jpg'}
							alt=''
						/>
					</PhotoView>
					<PhotoView
						data-aos='flip-left'
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/FVTphRb/product10-copyright-630x630.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/FVTphRb/product10-copyright-630x630.jpg'}
							alt=''
						/>
					</PhotoView>
					<PhotoView
						data-aos='flip-left'
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/yP4gdrf/product1-copyright-630x630.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/yP4gdrf/product1-copyright-630x630.jpg'}
							alt=''
						/>
					</PhotoView>
					<PhotoView
						data-aos='flip-left'
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/F71ZkfZ/product2-copyright-630x630.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/F71ZkfZ/product2-copyright-630x630.jpg'}
							alt=''
						/>
					</PhotoView>

					<PhotoView
						data-aos='flip-left'
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/9ytpjCD/product3-copyright-630x630.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/9ytpjCD/product3-copyright-630x630.jpg'}
							alt=''
						/>
					</PhotoView>

					<PhotoView
						data-aos='flip-left'
						className='w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
						src={'https://i.ibb.co/sbCsqXR/product4-copyright-630x630.jpg'}>
						<img
							data-aos='flip-left'
							src={'https://i.ibb.co/sbCsqXR/product4-copyright-630x630.jpg'}
							alt=''
						/>
					</PhotoView>
				</PhotoProvider>
			</div>
		</section>
	);
};

export default Gallery;
