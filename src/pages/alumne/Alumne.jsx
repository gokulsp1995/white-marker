import React from 'react';
import { Container } from '../../components';

const Alumne = () => {

    const items = [
        {
            id: 0,
            avatar: 'http://via.placeholder.com/280x280',
            name: 'Esther Howard',
            designation: 'Creative Designer',
            location: 'Dubai',
            facebook: '#',
            twitter: '#',
            linkedin: '#',
        }
    ];

    const repeat = 12;

    const repeatedItems = items.flatMap(item => Array(repeat).fill(item));

    return (
        <section className='page alumne'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>Lorem ipsum dolor sit amet</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Alumne;