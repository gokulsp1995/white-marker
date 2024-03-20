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
                        <h2 className='page__title'>FRESH INSIGHTS: DISCOVER WHAT'S HAPPENING NOW</h2>
                        <p className='page__text'>Explore the latest buzz and insights in our dynamic space, where every update promises to keep you engaged and informed. We bring you breaking news, noteworthy achievements, and exciting updates. From groundbreaking research to student accomplishments, faculty spotlights, and event announcements, this dynamic space is designed to keep you informed and engaged.</p>
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