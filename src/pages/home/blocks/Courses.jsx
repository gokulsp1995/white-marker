import { Container, Rounded, Course, Apply } from '../../../components';
import Photoshop from '../../../assets/img/software_1.png';
import Illustrator from '../../../assets/img/software_2.png';
import InDesign from '../../../assets/img/software_3.png';
import AfterEffects from '../../../assets/img/software_4.png';

const Courses = () => {

    const list = [
        {
            id: 0,
            title: 'Whitemarker Graphic master program',
            duration: '1 year',
            type: 'Half Day',
            description: 'This comprehensive graphic design course is designed for individuals seeking to develop a strong foundation in visual communication and brand communication design. Students will explore the principles and techniques of graphic design, gaining hands-on experience with industry-standard tools and software.',
            tags: ['Basic of Drawing', 'Branding Communication', 'Visual Communication'],
            softwares: [
                { title: 'Photoshop', src: Photoshop },
                { title: 'Illustrator', src: Illustrator },
                { title: 'In Design', src: InDesign },
                { title: 'After Effects', src: AfterEffects }
            ]
        },
        {
            id: 1,
            title: 'Digital Marketing',
            duration: '3 Months',
            type: 'Full Time',
            description: 'This dynamic Digital Marketing course is designed to equip individuals with the essential skills and knowledge needed to thrive in the rapidly evolving landscape of online marketing. Participants will explore key digital marketing concepts, tools, and strategies, gaining hands-on experience to develop effective digital campaigns.',
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
                        <div className='section__header--col' data-aos='fade-right'>
                            <span className='section__meta'>Courses</span>
                            <h3 className='section__title small'> UNLOCK POTENTIAL:<br /> ENRICH YOUR SKILLS TODAY</h3>
                        </div>
                        <div className='section__header--col' data-aos='fade-left'>
                            <p className='section__text'>Discover diverse courses at Whitemarker Skillshare, designed to fuel creativity, enhance skills, and propel your career forward confidently</p>
                        </div>
                    </div>
                    <div className='courses__grid' data-aos='zoom-in-down'>
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
                    <div className='section__footer' data-aos='zoom-in'>
                        <Rounded link='/courses' />
                    </div>
                </div>
                <div data-aos='flip-up'>
                    <Apply link='/registration' />
                </div>
            </Container>
        </section>
    );
}

export default Courses;