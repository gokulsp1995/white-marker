import React from 'react';
import { Container, Rounded } from '../../../components';

const Portfolio = () => {
    return (
        <section className='section portfolio'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col'>
                            <span className='section__meta'>Students Portfolios</span>
                            <h3 className='section__title small'>Take a look at some of<br /> our Students Work</h3>
                        </div>
                        <div className='section__header--col'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div className='portfolio__grid'>
                        <div className='portfolio__col'>
                            <div className='portfolio__image large'>
                                <img src='http://via.placeholder.com/900x700' alt='Portfolio One' />
                            </div>
                        </div>
                        <div className='portfolio__col'>
                            <div className='portfolio__image'>
                                <img src='http://via.placeholder.com/640x360' alt='Portfolio One' />
                            </div>
                            <div className='portfolio__image'>
                                <img src='http://via.placeholder.com/640x360' alt='Portfolio One' />
                            </div>
                        </div>
                    </div>
                    <div className='section__footer'>
                        <Rounded link='#' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Portfolio;