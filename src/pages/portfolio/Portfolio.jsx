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
                        <h2 className='page__title'>CREATIVE TALENTS ON DISPLAY: UNVEILING EXCELLENCE</h2>
                        <p className='page__text'>Welcome to experience the remarkable creations skilfully crafted by our talented members at Whitemarker Skillshare. Immerse yourself in a visual journey through the extraordinary talents of our aspiring designers. From striking visuals to innovative concepts, this gallery is a testament to the dedication and skill of our students. Explore the intersection of art and technology as you browse through a diverse array of projects, each telling a unique story. Get ready to be inspired as our students push the boundaries of design, showcasing their passion, originality, and mastery of the craft. Join us in celebrating the power of imagination and the limitless possibilities of graphic design!</p>
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