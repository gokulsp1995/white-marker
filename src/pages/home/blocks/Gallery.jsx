import React from 'react';
import { Container, Rounded } from '../../../components';

const Gallery = () => {

    const items = [
        {
            id: 0,
            title: 'Gallery 1',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 1,
            title: 'Gallery 2',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 2,
            title: 'Gallery 3',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 3,
            title: 'Gallery 4',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 4,
            title: 'Gallery 5',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 5,
            title: 'Gallery 6',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 6,
            title: 'Gallery 7',
            src: 'http://via.placeholder.com/400x400'
        },
        {
            id: 7,
            title: 'Gallery 8',
            src: 'http://via.placeholder.com/400x400'
        },
    ];

    return (
        <section className='section gallery'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col'>
                            <span className='section__meta'>Gallery</span>
                            <h3 className='section__title small'>Take a look at some of<br /> our Gallery</h3>
                        </div>
                        <div className='section__header--col'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div className='gallery__grid'>
                        {items.map((item, index) => (
                            <div key={index} className='gallery__item'>
                                <img src={item.src} alt={item.title} />
                            </div>
                        ))}
                    </div>
                    <div className='section__footer'>
                        <Rounded link='#' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Gallery;