import React from 'react';
import AnimatedText from '../../assets/img/button-text.svg';
import Arrow from '../../assets/img/button-arrow.svg';

const Rounded = ({ link, light }) => {
    return (
        <a href={link} className='rounded'>
            <span className={`rounded__text ${light && 'light'}`}>
                <img src={AnimatedText} alt='Animated Text' />
            </span>
            <span className='rounded__arrow'>
                <img src={Arrow} alt='Animated Arrow' />
            </span>
        </a>
    );
}

export default Rounded;