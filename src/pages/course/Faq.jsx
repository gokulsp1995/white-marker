import React from 'react';
import { Collapse, theme } from 'antd';
import { Plus, X } from '@phosphor-icons/react';
import { Container } from '../../components';

const getItems = (panelStyle) => [
    {
        key: '1',
        label: '1. How do I get started with the online courses ?',
        children: <p>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>,
        style: panelStyle
    },
    {
        key: '2',
        label: '2. Are the courses self-paced or do they have set schedules ?',
        children: <p>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>,
        style: panelStyle
    },
    {
        key: '3',
        label: '3. Lorem ipsum dolor sit amet consectetur mmodo etiam vestibulum quam tristique ?',
        children: <p>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>,
        style: panelStyle
    },
    {
        key: '4',
        label: '4. Commodo etiam vestibulum quam tristique non venenatis  ?',
        children: <p>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>,
        style: panelStyle
    },
    {
        key: '5',
        label: '5. How do I get started with the online courses ?',
        children: <p>Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.</p>,
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