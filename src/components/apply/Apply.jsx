import { Link } from 'react-router-dom';
import Arrow from '../../assets/img/button-arrow.svg';

const Apply = ({ link }) => {
    return (
        <Link to={link} className='apply'>
            <span className='apply__text'>Commodo etiam lacus<br /> vestibulum qu tristique non<br /> venenatis sed.</span>
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