import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { UserCircle } from '@phosphor-icons/react';
import { Twirl as Hamburger } from 'hamburger-react'
import { Container } from '../../components';
import Logo from '../../assets/img/logo.svg';

const Header = () => {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { id: 0, label: 'Home', link: '/' },
        { id: 1, label: 'About Us', link: '/about' },
        { id: 2, label: 'Courses', link: '/courses' },
        { id: 3, label: 'Alumni', link: '/alumni' },
        { id: 3, label: 'Gallery', link: '/gallery' },
        { id: 4, label: 'News & Updates', link: '/news' },
    ];

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Container>
                <div className='header__wrap'>
                    <div className='header__col'>
                        <Link to='/' className='header__logo'>
                            <img src={Logo} alt='White Marker' />
                        </Link>
                    </div>
                    <div className='header__col'>
                        <div className={`header__menu ${isOpen ? 'show' : 'hide'}`}>
                            <nav className='header__nav'>
                                {menuItems.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className='header__nav--link'
                                    >{item.label}</NavLink>
                                ))}
                                <Scroll
                                    to='contact'
                                    smooth={true}
                                    offset={-180}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className='header__nav--link'
                                >Contact Us</Scroll>
                            </nav>
                        </div>
                        <button className='header__login'>
                            <UserCircle weight='light' />
                        </button>
                        <div className='header__menu--toggle'>
                            <Hamburger
                                toggled={isOpen}
                                toggle={setIsOpen}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;