import React from 'react';
import Arrow from '../../assets/img/button-arrow.svg';

const Scroll = () => {

    const count = 100;

    return (
        <div className='scroll'>
            <div className='scroll__view'>
                <div className='scroll__body'>
                    {[...Array(count)].map((_, index) => (
                        <div key={index} className='scroll__item'>
                            <h3 className='scroll__text'>Reach Us</h3>
                            <i className='scroll__icon'>
                                <img src={Arrow} alt='arrow' />
                            </i>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Scroll