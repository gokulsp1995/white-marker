import { ArrowUpRight } from '@phosphor-icons/react';

const Button = ({ children, onClick, type, className }) => {
    return (
        <button type={type} className={`section__btn ${className}`} onClick={onClick}>
            {children}
            <span className='section__btn--arrow'>
                <ArrowUpRight weight='bold' />
            </span>
        </button>
    );
}

export default Button;