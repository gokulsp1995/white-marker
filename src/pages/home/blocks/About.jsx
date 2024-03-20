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
                            <h3 className='section__title small'>DISCOVER THE LEADING EDGE<br /> OF DESIGN EDUCATION</h3>
                        </div>
                        <div
                            className='section__header--col'
                            data-aos='fade-left'
                            data-aos-offset='-200'
                        >
                            <p className='section__text'>Welcome to Whitemarker Skillshare, where creativity meets expertise. Join us to unlock your potential and redefine your professional profile</p>
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
                                <p className='section__text'>c.At Whitemarker Skillshare, we specialize in refining your creative profile. Through personalized mentorship and innovative workshops, we help you sculpt a distinctive professional identity. Join our community to elevate your career trajectory and showcase your unique talents to the world.</p>
                                <div className='about__count'>
                                    <div className='about__count--item'>
                                        <span className='about__count--title'>
                                            <CountUp start={0} end={10} duration={8} enableScrollSpy={true} />
                                            + yrs
                                        </span>
                                        <span className='about__count--label'>10+ Years Expert <br/> Guidance</span>
                                    </div>
                                    <div className='about__count--item'>
                                        <span className='about__count--title'>
                                            <CountUp start={0} end={1000} duration={10} enableScrollSpy={true} />
                                            +
                                        </span>
                                        <span className='about__count--label'>1000+ Creative <br/> Artists</span>
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