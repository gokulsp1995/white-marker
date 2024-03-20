import CountUp from 'react-countup';
import { Container } from '../../../components';

const Counter = () => {
    return (
        <section className='section about__counter'>
            <Container>
                <div className='about__counter--grid'>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={0} end={100} duration={12} enableScrollSpy={true} />
                            </span>
                            <sup>%</sup>
                        </h4>
                        <span className='about__counter--label'>placement support </span>
                    </div>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={0} end={100} duration={8} enableScrollSpy={true} />
                            </span>
                            <sup> %</sup>
                        </h4>
                        <span className='about__counter--label'>Fully practical oriented syllabus</span>
                    </div>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={0} end={20} duration={10} enableScrollSpy={true} />
                            </span>
                            <sup>+</sup>
                        </h4>
                        <span className='about__counter--label'>years experienced faculties</span>
                    </div>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={10} end={100} duration={8} enableScrollSpy={true} />
                            </span>
                            <sup>%</sup>
                        </h4>
                        <span className='about__counter--label'>Up-to-Date Syllabus and Software</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Counter;