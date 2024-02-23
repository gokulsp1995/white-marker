import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

const Slider = () => {

    const slides = [
        {
            id: 0,
            src: 'https://picsum.photos/400/500.webp'
        },
        {
            id: 1,
            src: 'https://picsum.photos/430/380.webp'
        },
        {
            id: 2,
            src: 'https://picsum.photos/400/460.webp'
        },
        {
            id: 3,
            src: 'https://picsum.photos/400/450.webp'
        },
        {
            id: 4,
            src: 'https://picsum.photos/410/350.webp'
        },
        {
            id: 0,
            src: 'https://picsum.photos/400/510.webp'
        },
        {
            id: 1,
            src: 'https://picsum.photos/420/350.webp'
        },
        {
            id: 2,
            src: 'https://picsum.photos/420/450.webp'
        },
        {
            id: 3,
            src: 'https://picsum.photos/400/250.webp'
        },
        {
            id: 4,
            src: 'https://picsum.photos/400/360.webp'
        },
    ];

    return (
        <section className='section about__carousel'>
            <div className='about__carousel--slider'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={40}
                    loop={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 40
                        },
                        960: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        540: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        430: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        }
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true
                    }}
                    modules={[Autoplay]}
                    className='mySwiper'
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='about__carousel--item'>
                                <img src={slide.src} alt={`slider${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Slider;