import { Link } from 'react-scroll';
import { Container, Button } from '../../../components';

const Intro = () => {
    return (
        <section className='section intro'>
            <Container>
                <div className='intro__wrap'>
                    {/* <span
                        className='section__subtitle'
                        data-aos='fade-down'
                        data-aos-duration='1800'
                    >Design Visually Create Efficiently</span> */}
                    <h1
                        className='section__title large'
                        data-aos='fade-down'
                        data-aos-duration='1000'
                    >
                        <span>ELEVATE YOUR CAREER WITH  </span> WHITEMARKER SKILLSHARE: <span>COURSES TO BOOST YOUR</span> profile!
                        <Link
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={-180}
                                duration={500}
                        >
                            <Button>Let's Talk</Button>
                        </Link>
                    </h1>
                </div>
            </Container>
        </section>
    );
}

export default Intro;