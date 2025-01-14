import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Container, Rounded } from '../../../components';

const News = () => {

    const data = [
        {
            id: 0,
            image: 'http://via.placeholder.com/500x420',
            title: '15 ways to grow your saas in 21 days with no money',
            meta: 'June 16, 2022'
        },
        {
            id: 1,
            image: 'http://via.placeholder.com/500x420',
            title: 'Why everyone is moving today to subscribtions',
            meta: 'June 16, 2022'
        },
        {
            id: 2,
            image: 'http://via.placeholder.com/500x420',
            title: '9 ways to make it quick and never look back again in your life',
            meta: 'June 16, 2022'
        },
        {
            id: 3,
            image: 'http://via.placeholder.com/500x420',
            title: '15 ways to grow your saas in 21 days with no money',
            meta: 'June 16, 2022'
        },
        {
            id: 4,
            image: 'http://via.placeholder.com/500x420',
            title: 'Why everyone is moving today to subscribtions',
            meta: 'June 16, 2022'
        },
        {
            id: 5,
            image: 'http://via.placeholder.com/500x420',
            title: '9 ways to make it quick and never look back again in your life',
            meta: 'June 16, 2022'
        },
    ];

    return (
        <section className='section news'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header align-center'>
                        <span className='section__meta'>News & Updates</span>
                        <h3 className='section__title small'>Design Visually Create  News</h3>
                        <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                    </div>
                    <div className='news__slider'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={40}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                960: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                540: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                430: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                }
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                            modules={[Autoplay]}
                            className='mySwiper'
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='news__item'>
                                        <div className='news__item--img'>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className='news__item--content'>
                                            <h5 className='news__item--title'>{item.title}</h5>
                                            <span className='news__item--meta'>{item.meta}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='section__footer'>
                        <Rounded link='#' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default News;