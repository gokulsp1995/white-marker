import React from 'react';
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
                        <h2 className='page__title'>Lorem ipsum dolor sit amet</h2>
                        <p className='page__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat.</p>
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