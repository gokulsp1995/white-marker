import { Container, Rounded } from '../../../components';
import Banner from '../../../assets/img/alumni-banner.jpg';

const Alumni = () => {
    return (
        <section className='section alumne'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col' data-aos='fade-right'>
                            <span className='section__meta'>Alumni</span>
                            <h3 className='section__title small'>Lorem ipsum dolor sit<br /> amet consectetur</h3>
                        </div>
                        <div className='section__header--col' data-aos='fade-left'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div className='alumne__block'>
                        <div className='alumne__image' data-aos='flip-up'>
                            <img src={Banner} alt='Meet Our Ambassador' />
                        </div>
                        <div className='alumne__content'>
                            <h3 className='alumne__title' data-aos='flip-up' data-aos-duration='1500'>Meet Our Ambassadors</h3>
                            <div data-aos='zoom-in' data-aos-duration='1800'>
                                <Rounded link='/alumni' light={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Alumni;