import { useNavigate } from 'react-router-dom';
import { Container } from '../../components';
import { NewsData } from '../../data/NewsData';

const News = () => {

    const navigate = useNavigate();

    return (
        <section className='page news'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>Design Visually Create News</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
                    </div>
                    <div className='news__grid'>
                        {NewsData.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/news/${item.id}`)}
                                className='news__box'
                            >
                                <div className='news__thumb'>
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                                <div className='news__data'>
                                    <h4 className='news__heading'>{item.title}</h4>
                                    <span className='news__date'>{item.meta}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default News;