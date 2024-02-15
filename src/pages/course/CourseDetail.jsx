import React from 'react';
import { Row, Col } from 'antd';
import { Clock, ThumbsUp } from '@phosphor-icons/react';
import { Container, Course, Rounded } from '../../components';
import Faq from './Faq';
import Photoshop from '../../assets/img/software_one.svg';
import Illustrator from '../../assets/img/software_two.svg';
import InDesign from '../../assets/img/software_three.svg';
import AfterEffects from '../../assets/img/software_four.svg';
import Spec1 from '../../assets/img/spec_1.svg';
import Spec2 from '../../assets/img/spec_2.svg';
import Spec3 from '../../assets/img/spec_3.svg';
import Spec4 from '../../assets/img/spec_4.svg';
import Spec5 from '../../assets/img/spec_5.svg';
import Spec6 from '../../assets/img/spec_6.svg';

const CourseDetail = () => {


    const softwares = [
        { title: 'Photoshop', src: Photoshop },
        { title: 'Illustrator', src: Illustrator },
        { title: 'In Design', src: InDesign },
        { title: 'After Effects', src: AfterEffects }
    ];

    const specList = [
        {
            id: 0,
            label: 'Friendly and creative atmosphere',
            icon: Spec1
        },
        {
            id: 1,
            label: 'Awards and prizes for good works',
            icon: Spec2
        },
        {
            id: 2,
            label: 'Experienced Mendors',
            icon: Spec3
        },
        {
            id: 3,
            label: 'Placement assistance',
            icon: Spec4
        },
        {
            id: 4,
            label: 'Internship style of study',
            icon: Spec5
        },
        {
            id: 5,
            label: 'Experience and Course Completion Certificates',
            icon: Spec6
        },
    ];

    const courses = [
        {
            id: 0,
            title: 'Course Title Comes Here 01',
            duration: '1 Year',
            type: 'Full Time',
            description: 'Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur.',
            tags: ['Basic of Drawing', 'Visual Communication', 'Branding Communication'],
            softwares: [
                { title: 'Photoshop', src: Photoshop },
                { title: 'Illustrator', src: Illustrator },
                { title: 'In Design', src: InDesign },
                { title: 'After Effects', src: AfterEffects }
            ]
        },
        {
            id: 1,
            title: 'Course Title Comes Here 02',
            duration: '1 Year',
            type: 'Full Time',
            description: 'Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur.',
            tags: ['Branding Communication', 'Visual Communication'],
            softwares: [
                { title: 'Photoshop', src: Photoshop },
                { title: 'Illustrator', src: Illustrator }
            ]
        },
    ];

    const programs = [
        'Weekly Tests And Exams',
        'Chat with coffee',
        'Drawing Videos',
        'Urgent Work Programme',
        'Artism',
        'Special Day Work',
        'Weekend Work Programme',
        'Outdoor Activities',
        'Topic Explanation',
        'Crafting Programme',
        'Viva',
        'Monthly Award',
        'Assignment',
        'Monthly Review',
        'Live Printing',
        'Seminars',
        'Industrial Visit',
        'Experience Sharing',
        'Master Classes',
        'Campus Placement',
        'Work Practicing',
        'Refreshmental Trips',
        'Live Working Programme',
        'Artistry',
        'Logo Fest',
        'Group Work',
        'Artx'
    ];

    return (
        <>
            <section className='page courses'>
                <Container>
                    <div className='courses__header'>
                        <h1 className='page__title'>Course Title Comes here</h1>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Sed placerat porttitor nunc sed maecenas lectus sit sapien facilisis. Dolor egestas magnis nibh consectetur eget auctor aliquam. Pellentesque lectus justo ornare hendrerit ultricies nunc. Aliquet sit tempus ornare risus integer ut penatibus facilisis elit. Interdum a aliquet enim id tristique est mauris condimentum id. Et id pellentesque scelerisque purus turpis nulla facilisis egestas amet. Amet lectus mi tellus ultricies turpis tortor euismod tortor viverra. Sapien semper turpis tellus maecenas duis semper. Consequat tincidunt lacus pulvinar fermentum risus feugiat. At diam parturient fermentum elit molestie nibh sit urna.</p>
                    </div>
                    <div className='courses__info'>
                        <Row gutter={0} align='middle'>
                            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                                <div className='courses__image'>
                                    <img src='http://via.placeholder.com/720x500' alt='Title' />
                                </div>
                            </Col>
                            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                                <div className='courses__info--content'>
                                    <span className='course__subtitle' style={{ marginTop: 0 }}>Time and Duration</span>
                                    <div className='course__type'>
                                        <div className='course__type--item'>
                                            <i className='course__type--icon'>
                                                <Clock size={24} />
                                            </i>
                                            <span className='course__type--label'>1 Year</span>
                                        </div>
                                        <div className='course__type--item'>
                                            <i className='course__type--icon'>
                                                <ThumbsUp size={24} />
                                            </i>
                                            <span className='course__type--label'>Full Time</span>
                                        </div>
                                    </div>
                                    <span className='course__subtitle'>Gaining Expertise</span>
                                    <div className='course__tags'>
                                        <span className='course__tags--item'>Basic of Drawing</span>
                                        <span className='course__tags--item'>Visual Communication</span>
                                        <span className='course__tags--item'>Branding Communication</span>
                                    </div>
                                    <span className='course__subtitle'>Softwares</span>
                                    <div className='course__software'>
                                        {softwares.map((item, index) => (
                                            <i className='course__software--item' key={index} title={item.title}>
                                                <img src={item.src} alt={item.title} />
                                            </i>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='courses__info spec'>
                        <Row gutter={0}>
                            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                                <h3 className='courses__info--title'>Our own speciality</h3>
                            </Col>
                            <Col xl={16} lg={16} md={24} sm={24} xs={24}>
                                <div className='courses__info--list'>
                                    {specList.map((item, index) => (
                                        <div className='courses__info--item' key={index}>
                                            <i className='courses__info--icon'>
                                                <img src={item.icon} alt={item.label} />
                                            </i>
                                            <span className='courses__info--label'>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='courses__program'>
                        <div className='courses__program--wrap'>
                            <h3 className='courses__program--title'>Our extra programmes</h3>
                            <div className='courses__program--grid'>
                                {programs.map((item, index) => (
                                    <span className='courses__program--item' key={index}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='courses__other'>
                        <h3 className='courses__other--title'>Other courses</h3>
                        <div className='courses__other--grid'>
                            {courses.map((item, index) => (
                                <Course
                                    key={index}
                                    title={item.title}
                                    duration={item.duration}
                                    type={item.type}
                                    description={item.description}
                                    tags={item.tags}
                                    softwares={item.softwares}
                                    onClick={() => navigate(`/courses/${item.id}`)}
                                />
                            ))}
                        </div>
                        <div className='section__footer'>
                            <Rounded link='#' />
                        </div>
                    </div>
                </Container>
            </section>
            <Faq />
        </>
    );
}

export default CourseDetail;