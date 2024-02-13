import React from 'react';
import { Container, Rounded, Course, Apply } from '../../../components';
import Photoshop from '../../../assets/img/software_one.svg';
import Illustrator from '../../../assets/img/software_two.svg';
import InDesign from '../../../assets/img/software_three.svg';
import AfterEffects from '../../../assets/img/software_four.svg';

const Courses = () => {

    const list = [
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

    return (
        <section className='section courses'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col'>
                            <span className='section__meta'>Courses</span>
                            <h3 className='section__title small'>Lorem ipsum dolor sit<br /> Course Details</h3>
                        </div>
                        <div className='section__header--col'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <div className='courses__grid'>
                        {list.map((item, index) => (
                            <Course
                                key={index}
                                title={item.title}
                                duration={item.duration}
                                type={item.type}
                                description={item.description}
                                tags={item.tags}
                                softwares={item.softwares}
                            />
                        ))}
                    </div>
                    <div className='section__footer'>
                        <Rounded link='#' />
                    </div>
                </div>
                <Apply link='#' />
            </Container>
        </section>
    );
}

export default Courses;