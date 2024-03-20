import { useNavigate } from 'react-router-dom';
import { Container } from '../../components';

const Album = () => {

    const navigate = useNavigate();

    const items = [
        {
            id: 0,
            image: 'https://picsum.photos/512/512.webp',
            title: 'Album Name Number One'
        },
        {
            id: 1,
            image: 'https://picsum.photos/510/510.webp',
            title: 'Album Name Number One'
        },
        {
            id: 2,
            image: 'https://picsum.photos/500/500.webp',
            title: 'Album Name Number One'
        },
        {
            id: 3,
            image: 'https://picsum.photos/480/480.webp',
            title: 'Album Name Number One'
        },
    ];

    return (
        <section className='page album'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>a.DYNAMIC CREATIVE ACTIVITIES SHOWCASE</h2>
                        <p className='page__text'> In our digital realm, creativity thrives and innovation flourishes. We proudly showcase the diverse talents and achievements of our institute's community, spanning from students to faculty and beyond. Our gallery is a dynamic tapestry of artistic expression, featuring a vibrant mix of visual arts, multimedia projects, academic endeavours, and beyond</p>
                    </div>
                    <div className='album__grid'>
                        {items.map((item, index) => (
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