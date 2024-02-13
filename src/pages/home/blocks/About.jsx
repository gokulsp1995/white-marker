import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Row, Col } from 'react-bootstrap';
import { Container, Rounded } from '../../../components';
import BannerImg from '../../../assets/img/banner.jpg';

const About = () => {
    return (
        <section className='section about'>
            <Container>
                <div className='about__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col'>
                            <span className='section__meta'>About Us</span>
                            <h3 className='section__title small'>Design Visually<br /> Create  Efficiently</h3>
                        </div>
                        <div className='section__header--col'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div className='about__slider'>
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
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
                        <Row>
                            <Col xl={6} lg={6} xs={12}>
                                <div className='about__flex'>
                                    <Rounded link='#' />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} xs={12}>
                                <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                                <div className='about__count'>
                                    <div className='about__count--item'>
                                        <span className='about__count--title'>100+</span>
                                        <span className='about__count--label'>100+ Creative & Futuristic</span>
                                    </div>
                                    <div className='about__count--item'>
                                        <span className='about__count--title'>15yr</span>
                                        <span className='about__count--label'>Have Working 15+ years</span>
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