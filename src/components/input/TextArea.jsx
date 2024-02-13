import React from 'react';

const TextArea = ({
    id,
    name,
    type,
    placeholder,
    label,
    value,
    onChange,
    className
}) => {
    return (
        <div className='form__group'>
            <label htmlFor={name} className='form__label'>{label}</label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`form__input textarea ${className}`}
            />
        </div>
    );
}

export default TextArea;