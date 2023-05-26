import Banner from '../../../components/Banner/Banner';
import Category from '../../../components/Category/Category';
import Gallery from '../../../components/Gallery/Gallery';
import Hook from '../../../components/Hooks/Hooks';
import UniqueSection1 from '../../../components/UiqueSection1/UniqueSection1';
import UniqueSection2 from '../../../components/UiqueSection1/UniqueSection2';

const Home = () => {
    Hook('Home')
	return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <UniqueSection2></UniqueSection2>
            <UniqueSection1></UniqueSection1>
		</div>
	);
};

export default Home;
