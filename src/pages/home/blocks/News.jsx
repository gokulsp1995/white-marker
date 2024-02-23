import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Container, Rounded } from '../../../components';
import { NewsData } from '../../../data/NewsData';

const News = () => {
    return (
        <section className='section news'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col' data-aos='fade-right'>
                            <span className='section__meta'>News & Updates</span>
                            <h3 className='section__title small'>Design Visually Create News</h3>
                        </div>
                        <div className='section__header--col' data-aos='fade-left'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
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
                                    spaceBetween: 40
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
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                }
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                            modules={[Autoplay]}
                            className='mySwiper'
                        >
                            {NewsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='news__item' data-aos='flip-right'>
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
                        <Rounded link='/news' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default News;