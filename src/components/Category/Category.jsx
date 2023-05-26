import { useState } from 'react';
import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BathToys from './BathToys';
import LearningToys from './LearningToys';
import MusicalToys from './MusicalToys';


// uses category part 
const Category = () => {
	const [toys, setToys] = useState([]);
	const [active, setActive] = useState('Bath Toys');
	useEffect(() => {
		fetch(`https://lego-toy-server.vercel.app/toyCategory/${active}`)
			.then((res) => res.json())
			.then((data) => {
				setToys(data);
			});
	}, [active]);
	return (
		<div>
			<div className='text-center py-10'>
				<h2>CATEGORIES</h2>
				<h1 className='text-6xl'>
					We design toys not just for <br /> kids but with kids
				</h1>
			</div>
			<div className='flex justify-between mb-10 w-full px-10'>
				<Tabs className='w-full px-5 focus:text-pink-600 text-lg'>
					<TabList className='flex justify-evenly mb-5'>
						<Tab onClick={() => setActive('Bath Toys')}>Bath Toys</Tab>
						<Tab onClick={() => setActive('Figures Play')}>Learning Toys</Tab>
						<Tab onClick={() => setActive('Musical')}>Musical</Tab>
					</TabList>

					<TabPanel>
						<h2 className='grid md:grid-cols-3 gap-3'>
							{toys.map((toy) => (
								<BathToys key={toy._id} toy={toy}></BathToys>
							))}
						</h2>
					</TabPanel>
					<TabPanel>
						<h2 className='grid md:grid-cols-3 gap-3'>
							{toys.map((toy) => (
								<LearningToys key={toy._id} toy={toy}></LearningToys>
							))}
						</h2>
					</TabPanel>
					<TabPanel>
						<h2 className='grid md:grid-cols-3 gap-3'>
							{toys.map((toy) => (
								<MusicalToys key={toy._id} toy={toy}></MusicalToys>
							))}
						</h2>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default Category;
