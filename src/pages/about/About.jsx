import Intro from './blocks/Intro';
import Quote from './blocks/Quote';
import Awards from './blocks/Awards';
import Team  from './blocks/Team';
import Counter from './blocks/Counter';
import Slider from './blocks/Slider';

const About = () => {
    return (
        <>
            <Intro />
            <Quote />
            <Team />
            <Counter />
            <Slider />
            <Awards />
        </>
    );
}

export default About;