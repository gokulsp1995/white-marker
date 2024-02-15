import React from 'react';
import { Container } from '../../components';

const Gallery = () => {
    return (
        <section className='page gallery'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>Album Name Number one</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
                    </div>
                    <div className='gallery__grid'></div>
                </div>
            </Container>
        </section>
    );
}

export default Gallery;