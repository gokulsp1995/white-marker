import { Collapse, theme } from 'antd';
import { Plus, X } from '@phosphor-icons/react';
import { Container } from '../../components';

const getItems = (panelStyle) => [
    {
        key: '1',
        label: '1. What courses does the Graphic Design Institute offer?',
        children: <p>The Graphic Design Institute offers a range of courses including Graphic Design Fundamentals, Advanced Graphic Design, and Digital marketing. Check our Courses page for a complete list.</p>,
        style: panelStyle
    },
    {
        key: '2',
        label: '2. How can I enroll in a course at the Graphic Design Institute?',
        children: <p>To enroll in a course, simply visit our website and navigate to the "Admissions" section. Follow the outlined steps for online enrollment or contact our admissions team for assistance.</p>,
        style: panelStyle
    },
    {
        key: '3',
        label: '3. What software and tools are required for the Graphic Design courses?',
        children: <p>The required software and tools are outlined in the course descriptions. Students typically need access to industry-standard software like Adobe Creative Cloud. Check the course details for specific requirements.</p>,
        style: panelStyle
    },
    {
        key: '4',
        label: '4. What is the duration of each course?',
        children: <p>Course durations vary. You can find information on the duration of each course on the respective course pages. Some courses are designed for a few weeks, while others may span several months.</p>,
        style: panelStyle
    },
    {
        key: '5',
        label: '5. How can I contact the Graphic Design Institute for additional information?',
        children: <p>You can reach out to us through our "Contact Us" page on the website. Our support team will be happy to assist you with any inquiries or concerns.</p>,
        style: panelStyle
    },
];

const Faq = () => {

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 30,
        background: 'transparent',
        borderRadius: 0,
        border: '1px solid #2C313F',
    };

    return (
        <section className='section faq'>
            <Container>
                <div className='section__wrap'>
                    <div className='section__header'>
                        <div className='section__header--col'>
                            <h3 className='section__title small'>Frequently Asked<br /> Questions</h3>
                        </div>
                        <div className='section__header--col'>
                            <p className='section__text'>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>
                        </div>
                    </div>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => isActive 
                            ? <X size={26} />
                            : <Plus size={26} />
                        }
                        expandIconPosition='end'
                        accordion
                        items={getItems(panelStyle)}
                    />
                </div>
            </Container>
        </section>
    );
}

export default Faq;