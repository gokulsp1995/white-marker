import { Container } from '../../components';
import { Row, Col } from 'antd';
import { NewsData } from '../../data/NewsData';

const NewsDetail = () => {

    const recent = NewsData.slice(0, 3);

    return (
        <section className='page news'>
            <Container>
                <div className='page__wrap'>
                    <Row>
                        <Col xl={16} lg={24} md={24} xs={24}>
                            <h1 className='news__detail--title'>pulvinar ibh libero posuere elementum</h1>
                            <span className='news__detail--meta'>June 16, 2022</span>
                        </Col>
                        <Col xl={8} lg={24} md={24} xs={24}>
                            <h4 className='news__detail--subtitle'>Lorem ipsum dolor sit ametion  future consectetur. Velion aliquam feugiat proin tincidunt the feugiat viverra. Commodo etiam vestibulum quam tristique non</h4>
                        </Col>
                    </Row>
                    <Row gutter={40}>
                        <Col xl={16} lg={16} xs={24}>
                            <div className='news__detail--image'>
                                <img src='http://via.placeholder.com/985x680' alt='title' />
                            </div>
                            <div className='news__detail--content'>
                                <p>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} xs={24}>
                            <div className='news__detail--recent'>
                                {recent.map((item, index) => (
                                    <div className='news__box' key={index} onClick={() => navigate(`/news/${item.id}`)}>
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
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default NewsDetail;