import React from 'react';
import { Container, Rounded } from '../../../components';
import Banner from '../../../assets/img/alumni-banner.jpg';

const Alumne = () => {
    return (
        <section className='section alumne'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col'>
                            <span className='section__meta'>Alumne</span>
                            <h3 className='section__title small'>Lorem ipsum dolor sit<br /> amet consectetur</h3>
                        </div>
                        <div className='section__header--col'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div className='alumne__block'>
                        <div className='alumne__image'>
                            <img src={Banner} alt='Meet Our Ambassador' />
                        </div>
                        <div className='alumne__content'>
                            <h3 className='alumne__title'>Meet Our Ambassador</h3>
                            <Rounded link='#' light={true} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Alumne;