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
                            <p className='about__team--text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat
                                proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis
                                sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat
                                viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit
                                amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam
                                vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel
                                aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique
                                non venenatis sed.Lorem ipsum </p>
                        </Col>
                    </Row>
                </div>
                <div className='about__team--row'>
                    <Row gutter={60} align='middle'>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <h4 className='about__team--title'>What We Do</h4>
                        </Col>
                        <Col xl={12} lg={24} sm={24} xs={24}>
                            <p className='about__team--text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat
                                proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis
                                sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat
                                viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit
                                amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam
                                vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel
                                aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique
                                non venenatis sed.Lorem ipsum </p>
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
                                <h4 className='about__team--desc'>consectetur. Vel aliquam feugiat proin tincidunt
                                    feugiat viverra. Commodo vestibulum</h4>
                                <div className='about__team--grid'>
                                    <p className='about__team--text'>He has shaped the success of Whitemarker
                                        Productions and WhitemarkerSkillshare. With two decades of expertise in
                                        branding, advertising, and film poster design, Ryas has earned numerous
                                        accolades.</p>
                                    <p className='about__team--text'>Serving as a guiding leader at Whitemarker, they
                                        extend their impact by providing creative training to students at
                                        WhitemarkerSkillshare.</p>
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
                                    <p className='about__team--text'>Skilled in guiding precise observations, he
                                        completed a Graphic Design Diploma and excelled in WhitemarkerSkillshare's
                                        business, creative, and training sectors.</p>
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
                                    <p className='about__team--text'>Leading Skillshare's software training division,
                                        Naufal, with 7 years in training, swiftly embraces and imparts the latest
                                        technology concepts. Essential in creative design training at Skillshare.</p>
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