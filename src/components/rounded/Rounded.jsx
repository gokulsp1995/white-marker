import { Link } from 'react-router-dom';
import AnimatedText from '../../assets/img/button-text.svg';
import Arrow from '../../assets/img/button-arrow.svg';

const Rounded = ({ link, light }) => {
    return (
        <Link to={link} className='rounded'>
            <span className={`rounded__text ${light && 'light'}`}>
                <img src={AnimatedText} alt='Animated Text' />
            </span>
            <span className='rounded__arrow'>
                <img src={Arrow} alt='Animated Arrow' />
            </span>
        </Link>
    );
}

export default Rounded;