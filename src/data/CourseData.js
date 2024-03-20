import Photoshop from '../assets/img/software_1.png';
import Illustrator from '../assets/img/software_2.png';
import InDesign from '../assets/img/software_3.png';
import AfterEffects from '../assets/img/software_4.png';

export const CourseData = [
    {
        id: 0,
        title: 'Whitemarker Graphic master program (WGMP)',
        duration: '1 year',
        type: 'Half Day',
        description: 'This comprehensive graphic design course is tailored for individuals aspiring to build a robust foundation in visual and brand communication design. Students delve into the principles and techniques of graphic design, gaining practical experience with industry-standard tools and software.',
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
        description: 'This dynamic Digital Marketing course is meticulously crafted to empower individuals with essential skills and knowledge vital for success in the rapidly evolving online marketing arena. Participants delve into key digital marketing concepts, tools, and strategies, gaining hands-on experience to craft effective digital campaigns.',
        tags: ['Branding Communication', 'Visual Communication'],
        softwares: [
            { title: 'Photoshop', src: Photoshop },
            { title: 'Illustrator', src: Illustrator }
        ]
    },
];