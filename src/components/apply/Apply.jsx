import React from 'react';
import Arrow from '../../assets/img/button-arrow.svg';

const Apply = ({ link }) => {
    return (
        <a href={link} className='apply'>
            <span className='apply__text'>Commodo etiam lacus<br /> vestibulum qu tristique non<br /> venenatis sed.</span>
            <div className='apply__title'>
                Apply courses Now
                <i className='apply__icon'>
                    <img src={Arrow} alt='Apply' />
                </i>
            </div>
        </a>
    );
}

export default Apply;