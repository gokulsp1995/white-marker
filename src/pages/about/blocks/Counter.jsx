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
                                <CountUp start={0} end={13} duration={12} enableScrollSpy={true} />
                            </span>
                            <sup>+</sup>
                        </h4>
                        <span className='about__counter--label'>Years in Market</span>
                    </div>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={0} end={110} duration={8} enableScrollSpy={true} />
                            </span>
                        </h4>
                        <span className='about__counter--label'>Projects Done</span>
                    </div>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={0} end={99} duration={10} enableScrollSpy={true} />
                            </span>
                            <sup>%</sup>
                        </h4>
                        <span className='about__counter--label'>Top Feedback</span>
                    </div>
                    <div className='about__counter--item'>
                        <h4 className='about__counter--count'>
                            <span>
                                <CountUp start={10} end={100} duration={8} enableScrollSpy={true} />
                            </span>
                            <sup>+</sup>
                        </h4>
                        <span className='about__counter--label'>Projects Done</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Counter;