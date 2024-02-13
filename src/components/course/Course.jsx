import React from 'react';
import { Clock, ThumbsUp } from '@phosphor-icons/react';

const Course = ({
    key,
    title,
    duration,
    type,
    description,
    tags,
    softwares
}) => {
    return (
        <div className='course' key={key}>
            <h4 className='course__title'>{title}</h4>
            <div className='course__type'>
                <div className='course__type--item'>
                    <i className='course__type--icon'>
                        <Clock size={24} />
                    </i>
                    <span className='course__type--label'>{duration}</span>
                </div>
                <div className='course__type--item'>
                    <i className='course__type--icon'>
                        <ThumbsUp size={24} />
                    </i>
                    <span className='course__type--label'>{type}</span>
                </div>
            </div>
            <p className='course__description'>{description}</p>
            <span className='course__subtitle'>Gaining Expertise</span>
            <div className='course__tags'>
                {tags.map((tag, index) => (
                    <span className='course__tags--item' key={index}>{tag}</span>
                ))}
            </div>
            <span className='course__subtitle'>Softwares</span>
            <div className='course__software'>
                {softwares.map((item, index) => (
                    <i className='course__software--item' key={index} title={item.title}>
                        <img src={item.src} alt={item.title} />
                    </i>
                ))}
            </div>
        </div>
    );
}

export default Course;