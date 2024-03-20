import  { Row, Col } from 'antd';
import { Container } from '../../../components';
import TeamOne from '../../../assets/img/team_1.jpg';
import TeamTwo from '../../../assets/img/team_2.jpg';
import TeamThree from '../../../assets/img/team_3.jpg';

const Team = () => {
    return (
        <section className='section about__team'>
            <Container>
                <div className='about__team--row'>
                    <Row gutter={60} align='middle'>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <h4 className='about__team--title'>Who We Are</h4>
                        </Col>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <p className='about__team--text'>Whitemarker Productions Private Limited, a pioneering advertising agency in Kerala, is renowned for its distinctive design style. With over 20 years of experience, it specializes in film poster designing, branding, and advertising, serving international brands across diverse sectors, including Malayalam and Hollywood. Meanwhile, Whitemarker Skillshare has been actively contributing to graphic design and digital marketing education for the past decade</p>
                        </Col>
                    </Row>
                </div>
                <div className='about__team--row'>
                    <Row gutter={60} align='middle'>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <h4 className='about__team--title'>What We Do</h4>
                        </Col>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <p className='about__team--text'>In this era where businesses thrive, branding and advertising, as well as marketing, play a crucial role. Hence, before presenting courses that involve graphic designing and digital marketing, Whitemarker Skillshare showcased expertise through their production company. Whitemarker Skillshare's significance is underscored by its alumni, who work in numerous national and international companies. They are key elements in shaping the industry's future, given the myriad opportunities this field offers </p>
                        </Col>
                    </Row>
                </div>
                <div className='about__team--row'>
                    <Row gutter={60}>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <h4 className='about__team--title team'>Our Team</h4>
                        </Col>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <div className='about__team--member main'>
                                <div className='about__team--avatar large'>
                                    <img src={TeamOne} alt='Riaz'/>
                                </div>
                                <span className='about__team--desg'>
                                    RYAS WHITEMARKER
                                    <span>Founder and Creative Training Specialist</span>
                                </span>
                                <h4 className='about__team--desc'>“ THOUGH MY BLOOD GROUP IS A +VE, I’D RATHER SAY IT . AS D +VE, DESIGN IN MY BLOOD, BECAUSE MY THOUGHTS ARE ALWAYS FILLED WITH COLOURFUL DESIGNS”</h4>
                                <div className='about__team--grid'>
                                    <p className='about__team--text'>Riyas Whitemarker has been instrumental in shaping the success of both Whitemarker Productions and WhitemarkerSkillshare. With over two decades of experience in branding, advertising, and film poster design, Riyas has garnered numerous accolades.</p>
                                    <p className='about__team--text'>As a guiding force at Whitemarker, they extend their influence by offering creative training to students at WhitemarkerSkillshare.</p>
                                </div>
                            </div>
                            <div className='about__team--member'>
                                <div className='about__team--avatar large'>
                                    <img src={TeamTwo} alt='Anoop VP'/>
                                </div>
                                <div className='about__team--content'>
                                    <span className='about__team--desg'>
                                        ANOOP VP
                                        <span>Manager & Instructor</span>
                                    </span>
                                    <p className='about__team--text'>II.Skilled in guiding precise observations, he completed a Graphic Design Diploma and excelled in WhitemarkerSkillshare's business, creative, and training sectors.</p>
                                </div>
                            </div>
                            <div className='about__team--member'>
                                <div className='about__team--avatar large'>
                                <img src={TeamThree} alt='Noufal Moidu PT'/>
                                </div>
                                <div className='about__team--content'>
                                    <span className='about__team--desg'>
                                    Noufal Moidu PT
                                    <span>Software Training Specialist</span>
                                </span>
                                    <p className='about__team--text'>As the head of software training division, Naufal brings seven years of expertise in swiftly embracing and imparting the latest technology concepts. He plays a vital role in providing essential training for creative design at Skillshare.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Team;