import  { Row, Col } from 'antd';
import  { Container } from '../../../components';
import Banner from '../../../assets/img/about-intro.jpg';

const Intro = () => {
    return (
        <section className='section about__intro'>
            <Container>
                <div className='section__wrap'>
                    <Row gutter={60}>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <div className='about__intro--img' data-aos='flip-left'>
                                <img src={Banner} alt='About' />
                            </div>
                        </Col>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <h1 className='about__intro--title' data-aos='flip-down'>
                                CREATIVE <br/>
                                <span>PLAYGROUND</span> <br/>
                                FOR EVERYBODY <br/>
                                Lorem Ipsum
                            </h1>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export  default  Intro;