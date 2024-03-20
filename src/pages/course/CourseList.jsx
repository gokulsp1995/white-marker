import { useNavigate } from 'react-router-dom';
import { Container, Course } from '../../components';
import { CourseData } from '../../data/CourseData';

const CourseList = () => {

    const navigate = useNavigate();

    return (
        <section className='page courses'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>UNLOCK POTENTIAL: ENRICH YOUR SKILLS TODAY</h2>
                        <p className='page__text'>Welcome to WhitemarkerSkillshare, where creativity meets strategy! Our Graphic Design and Digital Marketing Diploma course is crafted for individuals passionate about visual communication and the dynamic realm of digital marketing. Whether you're an aspiring designer or aim to excel as a digital marketer, this comprehensive program equips you with the skills to thrive in today's competitive landscape.</p>
                    </div>
                    <div className='courses__list'>
                        {CourseData.map((item, index) => (
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
                </div>
            </Container>
        </section>
    );
}

export default CourseList;