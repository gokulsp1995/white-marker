import { Image } from 'antd';
import { Container } from '../../components';
import { PortfolioData } from '../../data/PortfolioData';

const Portfolio = () => {

    const portfolios = [
        {
            id: 0,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 1,
            src: 'http://via.placeholder.com/1010x400'
        },
        {
            id: 2,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 3,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 4,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 5,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 6,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 7,
            src: 'http://via.placeholder.com/480x400'
        },
        {
            id: 1,
            src: 'http://via.placeholder.com/1010x400'
        },
        {
            id: 9,
            src: 'http://via.placeholder.com/480x400'
        },
    ];

    return (
        <section className='page portfolio'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>Take a look at some of our students work</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin
                            tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem
                            ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra.
                            Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat
                            proin tincidunt feugiat.</p>
                    </div>
                    <div className='portfolio__list'>
                        <Image.PreviewGroup>
                            {PortfolioData.map((item, index) => (
                                <div key={index} className='portfolio__item'>
                                    <Image
                                        width='100%'
                                        height='100%'
                                        src={item}
                                    />
                                </div>
                            ))}
                        </Image.PreviewGroup>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Portfolio;