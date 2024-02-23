const Input = ({
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
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`form__input ${className}`}
            />
        </div>
    );
}

export default Input;