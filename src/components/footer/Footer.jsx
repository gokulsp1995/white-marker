import { Link } from 'react-router-dom';
import { Container, Contact } from '../../components';
import Logo from '../../assets/img/logo.svg';
import Event1 from '../../assets/img/event_1.svg';
import Event2 from '../../assets/img/event_2.svg';
import Event3 from '../../assets/img/event_3.svg';
import Event4 from '../../assets/img/event_4.svg';
import FacebookLogo from '../../assets/img/facebook-icon.svg';
import WhatsappLogo from '../../assets/img/whatsapp-icon.svg';
import LinkedinLogo from '../../assets/img/linkedin-icon.svg';
import InstagramLogo from '../../assets/img/instagram-icon.svg';
import TwitterLogo from '../../assets/img/twitter-icon.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <section className='footer__wrap'>
                    <Contact />
                </section>
                <section className='footer__main'>
                    <div className='footer__col'>
                        <Link to='/' className='footer__logo'>
                            <img src={Logo} alt='White Marker' />
                        </Link>
                        <div className='footer__events'>
                            <span className='footer__events--title'>Our Specialevents</span>
                            <i className='footer__events--logo'>
                                <img src={Event1} alt='Event One' />
                            </i>
                            <i className='footer__events--logo'>
                                <img src={Event2} alt='Event Two' />
                            </i>
                            <i className='footer__events--logo'>
                                <img src={Event3} alt='Event Three' />
                            </i>
                            <i className='footer__events--logo'>
                                <img src={Event4} alt='Event Four' />
                            </i>
                        </div>
                    </div>
                    <div className='footer__col'>
                        <div className='footer__links'>
                            <Link to='/' className='footer__links--item'>Home</Link>
                            <Link to='/about' className='footer__links--item'>About Us</Link>
                            <Link to='/course' className='footer__links--item'>Courses</Link>
                            <Link to='/facility' className='footer__links--item'>Facilities</Link>
                            <Link to='/news' className='footer__links--item'>News & Updates</Link>
                            <Link to='/contact' className='footer__links--item'>Contact</Link>
                        </div>
                    </div>
                </section>
                <section className='footer__bottom'>
                    <span className='footer__bottom--copy'>All rights reserved ® Whitemakers.com  | Terms and Conditions Apply!</span>
                    <div className='footer__social'>
                        <Link to='#' className='footer__social--link'>
                            <img src={FacebookLogo} alt='Facebook' />
                        </Link>
                        <Link to='#' className='footer__social--link'>
                            <img src={WhatsappLogo} alt='Whatsapp' />
                        </Link>
                        <Link to='#' className='footer__social--link'>
                            <img src={LinkedinLogo} alt='Lnkedin'/>
                        </Link>
                        <Link to='#' className='footer__social--link'>
                            <img src={InstagramLogo} alt='Instgram'/>
                        </Link>
                        <Link to='#' className='footer__social--link'>
                            <img src={TwitterLogo} alt='Twitter'/>
                        </Link>
                    </div>
                </section>
            </Container>
        </footer>
    );
}

export default Footer;