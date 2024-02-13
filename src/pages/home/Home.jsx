import React from 'react';
import Intro from './blocks/Intro';
import About from './blocks/About';
import Courses from './blocks/Courses';
import Alumne from './blocks/Alumne';
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
            <Alumne />
            <Portfolio />
            <Gallery />
            <News />
            <Partner />
        </>
    );
}

export default Home;