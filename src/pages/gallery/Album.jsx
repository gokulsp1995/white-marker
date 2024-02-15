import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components';

const Album = () => {

    const navigate = useNavigate();

    const items = [
        {
            id: 0,
            image: 'http://via.placeholder.com/360x360',
            title: 'Album Name Number One'
        }
    ];

    const repeat = 12;

    const repeatedItems = items.flatMap(item => Array(repeat).fill(item));

    return (
        <section className='page album'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>Take a look at some of our our Gallery</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
                    </div>
                    <div className='album__grid'>
                        {repeatedItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/gallery/${item.id}`)}
                                className='album__box'
                            >
                                <div className='album__image'>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h5 className='album__title'>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Album;