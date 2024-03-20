import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Container } from '../../../components';
import Partner1 from '../../../assets/img/partners/partner_1.svg';
import Partner2 from '../../../assets/img/partners/partner_2.svg';
import Partner3 from '../../../assets/img/partners/partner_3.svg';
import Partner4 from '../../../assets/img/partners/partner_4.svg';
import Partner5 from '../../../assets/img/partners/partner_5.svg';
import Partner6 from '../../../assets/img/partners/partner_6.svg';
import Partner8 from '../../../assets/img/partners/partner_8.svg';
import Partner11 from '../../../assets/img/partners/partner_11.svg';

const Partner = () => {
    
    const data = [
        {
            id: 0,
            title: 'Partner 1',
            src: Partner1
        },
        {
            id: 1,
            title: 'Partner 2',
            src: Partner2
        },
        {
            id: 2,
            title: 'Partner 3',
            src: Partner3
        },
        {
            id: 3,
            title: 'Partner 4',
            src: Partner4
        },
        {
            id: 4,
            title: 'Partner 5',
            src: Partner5
        },
        {
            id: 5,
            title: 'Partner 6',
            src: Partner6
        },
        {
            id: 6,
            title: 'Partner 8',
            src: Partner8
        },
        {
            id: 7,
            title: 'Partner 11',
            src: Partner11
        },
        {
            id: 8,
            title: 'Partner 1',
            src: Partner1
        },
        {
            id: 9,
            title: 'Partner 2',
            src: Partner2
        },
        {
            id: 10,
            title: 'Partner 3',
            src: Partner3
        },
        {
            id: 11,
            title: 'Partner 4',
            src: Partner4
        },
        {
            id: 12,
            title: 'Partner 5',
            src: Partner5
        },
        {
            id: 13,
            title: 'Partner 6',
            src: Partner6
        },
        {
            id: 14,
            title: 'Partner 8',
            src: Partner8
        },
        {
            id: 15,
            title: 'Partner 11',
            src: Partner11
        }
    ];

    return (
        <section className='section partner'>
            <div className='section__header align-center'>
                <span className='section__meta' data-aos='flip-down'>PLACEMENT PARTNERS</span>
                <h3 className='section__title small' data-aos='flip-up'>TALENT NETWORKING: OUR TRUSTED CAREER COLLABORATORS</h3>
            </div>
            <div className='partner__slider'>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={60}
                    breakpoints={{
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 60
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 40
                        },
                        540: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        430: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        }
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    modules={[Autoplay]}
                    className='mySwiper'
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='partner__item' title={item.title}>
                                <img src={item.src} alt={item.title} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Container>
                <div className='partner__border' />
            </Container>
        </section>
    );
}

export default Partner;