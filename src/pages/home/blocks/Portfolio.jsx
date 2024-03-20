import { Image } from 'antd';
import { Container, Rounded } from '../../../components';
import Work1 from '../../../assets/img/portfolio/work_1.jpg';
import Work2 from '../../../assets/img/portfolio/work_21.jpg';
import Work3 from '../../../assets/img/portfolio/work_32.jpg';

const Portfolio = () => {
    return (
        <section className='section portfolio'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col' data-aos='fade-right'>
                            <span className='section__meta'>Students Portfolios</span>
                            <h3 className='section__title small'>CREATIVE TALENTS ON DISPLAY:<br /> UNVEILING EXCELLENCE</h3>
                        </div>
                        <div className='section__header--col' data-aos='fade-left'>
                            <p className='section__text'>Delve into our diverse collection of student portfolios, where creativity, innovation, and talent converge to inspire and captivate</p>
                        </div>
                    </div>
                    <div className='portfolio__grid'>
                        <div className='portfolio__col'>
                            <div className='portfolio__image large' data-aos='flip-left'>
                                <Image
                                    width='100%'
                                    height='100%'
                                    src={Work1}
                                    alt='Portfolio One'
                                />
                            </div>
                        </div>
                        <div className='portfolio__col'>
                            <div className='portfolio__image' data-aos='flip-right'>
                                <Image
                                    width='100%'
                                    height='100%'
                                    src={Work2}
                                    alt='Portfolio Two'
                                />
                            </div>
                            <div className='portfolio__image' data-aos='flip-right'>
                                <Image
                                    width='100%'
                                    height='100%'
                                    src={Work3}
                                    alt='Portfolio Three'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='section__footer' data-aos='zoom-in'>
                        <Rounded link='/portfolio' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Portfolio;