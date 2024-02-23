import Intro from './blocks/Intro';
import About from './blocks/About';
import Courses from './blocks/Courses';
import Alumni from './blocks/Alumni';
import Portfolio from './blocks/Portfolio';
import Gallery from './blocks/Gallery';
import News from './blocks/News';
import Partner from './blocks/Partner';

const Home = () => {
    return (
        <>
            <Intro />
            <About />
            <Courses />
            <Alumni />
            <Portfolio />
            <Gallery />
            <News />
            <Partner />
        </>
    );
}

export default Home;