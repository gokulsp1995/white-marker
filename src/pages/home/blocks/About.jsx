import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Row, Col } from 'antd';
import CountUp from 'react-countup';
import { Container, Rounded } from '../../../components';
import BannerImg from '../../../assets/img/banner.jpg';

const About = () => {
    return (
        <section className='section about'>
            <Container>
                <div className='about__wrap'>
                    <div className='section__header'>
                        <div
                                className='section__header--col'
                                data-aos='fade-right'
                                data-aos-offset='-200'
                        >
                            <span className='section__meta'>About Us</span>
                            <h3 className='section__title small'>Design Visually<br /> Create  Efficiently</h3>
                        </div>
                        <div
                            className='section__header--col'
                            data-aos='fade-left'
                            data-aos-offset='-200'
                        >
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div
                        className='about__slider'
                        data-aos='flip-right'
                        data-aos-offset='100'
                    >
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                            modules={[Pagination, Autoplay]}
                            className='mySwiper'
                        >
                            <SwiperSlide>
                                <div className='about__slider--img'>
                                    <img src={BannerImg} alt='White Marker' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='about__slider--img'>
                                    <img src={BannerImg} alt='White Marker' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='about__slider--img'>
                                    <img src={BannerImg} alt='White Marker' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='about__content'>
                        <Row className='about__flex--row'>
                            <Col xl={12} lg={12} xs={24}>
                                <div className='about__flex' data-aos='zoom-in'>
                                    <Rounded link='/about' />
                                </div>
                            </Col>
                            <Col xl={12} lg={12} xs={242} data-aos='flip-right'>
                                <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                                <div className='about__count'>
                                    <div className='about__count--item'>
                                        <span className='about__count--title'>
                                            <CountUp start={0} end={100} duration={8} enableScrollSpy={true} />
                                            +
                                        </span>
                                        <span className='about__count--label'>100+ Creative &<br/> Futuristic</span>
                                    </div>
                                    <div className='about__count--item'>
                                        <span className='about__count--title'>
                                            <CountUp start={0} end={15} duration={10} enableScrollSpy={true} />
                                            yr
                                        </span>
                                        <span className='about__count--label'>Have Working 15+<br/> years</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;