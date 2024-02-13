import React from 'react';
import { Container, Button } from '../../../components';

const Intro = () => {
    return (
        <section className='section intro'>
            <Container>
                <div className='intro__wrap'>
                    <span className='section__subtitle'>Design Visually Create Efficiently</span>
                    <h1 className='section__title large'>
                        <span>Word Clanision</span> courses careers <span>chance wojerk teamese the</span> profile
                        <Button>Let's Talk</Button>
                    </h1>
                </div>
            </Container>
        </section>
    );
}

export default Intro;