import { useEffect } from 'react';
import {FacebookLogo, LinkedinLogo, MapPin, TwitterLogo} from '@phosphor-icons/react';
import {Link} from 'react-router-dom';
import { Container } from '../../components';
import { AlumniData } from '../../data/AlumniData';

const Alumni = () => {

    useEffect(() => {
        const alumniItems = document.getElementsByClassName('alumni__item');
        if (window.innerWidth <= 1024) {
            for (let i = 0; i < alumniItems.length; i++) {
                alumniItems[i].classList.remove('reverse');
                alumniItems[i].classList.remove('inverted');
                alumniItems[i].classList.remove('normal');
            }
        }
    }, []);

    return (
        <section className='page alumni'>
            <Container>
                <div className='page__wrap'>
                    <div className='page__header'>
                        <h2 className='page__title'>CELEBRATING SUCCESS STORIES TOGETHER</h2>
                        <p className='page__text'>At WhitemarkerSkillshare, our legacy of creativity flourishes through the remarkable journeys of our alumni. This page celebrates the talented individuals who have emerged from our graphic design programs, leaving an indelible mark on the world of visual communication.</p>
                    </div>
                    <div className='alumni__grid'>
                        {AlumniData.map((item, index) => (
                            <div key={index} className={`alumni__item ${index % 6 < 3 ? 'column' : 'reverse'}`}>
                                <div className='alumni__avatar'>
                                    <img src={item.avatar} alt={item.name} />
                                </div>
                                <div className='alumni__data'>
                                    <h4 className='alumni__name'>{item.name}</h4>
                                    <span className='alumni__desg'>{item.designation}</span>
                                    <span className='alumni__location'>
                                        <MapPin size={16} weight='fill' />
                                        {item.location}
                                    </span>
                                    <div className='alumni__social'>
                                        <Link to={item.facebook} className='alumni__social--link'>
                                            <FacebookLogo size={20} weight='fill' />
                                        </Link>
                                        <Link to={item.twitter} className='alumni__social--link'>
                                            <TwitterLogo size={20} weight='fill' />
                                        </Link>
                                        <Link to={item.twitter} className='alumni__social--link'>
                                            <LinkedinLogo size={20} weight='fill' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Alumni;