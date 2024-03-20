import { Link } from 'react-router-dom';
import Arrow from '../../assets/img/button-arrow.svg';

const Apply = ({ link }) => {
    return (
        <Link to={link} className='apply'>
            <span className='apply__text'>Take the next step in<br />  your journey to unlock <br /> your full potential.</span>
            <div className='apply__title'>
                Apply courses Now
                <i className='apply__icon'>
                    <img src={Arrow} alt='Apply' />
                </i>
            </div>
        </Link>
    );
}

export default Apply;