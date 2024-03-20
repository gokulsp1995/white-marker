import { Row, Col } from 'antd';
import { Container } from '../../../components';
import Banner from "../../../assets/img/about-intro.jpg";

const Quote = () => {
    return (
        <section className='section about__quote'>
            <Container>
                <div className='section__wrap'>
                    <Row gutter={60}>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <h3 className='section__title small'> DISCOVER THE LEADING<br/> EDGE OF DESIGN EDUCATION</h3>
                        </Col>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <p className='section__text'>Welcome to WhitemarkerSkillshare, where passion, skill, and imagination converge. Established in 2014, we lead in nurturing graphic design professionals. Our holistic education approach emphasizes practical application over theory, with real-world projects and collaborations. Students develop portfolios showcasing technical prowess and unique design perspectives, shaping their creative journey. Join us at WhitemarkerSkillshare to embark on your path to professional excellence</p>
                        </Col>
                    </Row>
                    <div className='about__quote--banner' data-aos-duration='1500'>
                        <h5 className='about__quote--text'>“ Though my blood group is A+ve, I’d rather say it as D+ve,
                            designs in my blood, because my thoughts are always filled with colourfull designs“</h5>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Quote;