import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserCircle } from '@phosphor-icons/react';
import { Pivot as Hamburger } from 'hamburger-react'
import { Container } from '../../components';
import Logo from '../../assets/img/logo.svg';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 0, label: 'Home', link: '/' },
        { id: 1, label: 'About Us', link: '/about' },
        { id: 2, label: 'Courses', link: '/courses' },
        { id: 3, label: 'Facilities', link: '/facility' },
        { id: 3, label: 'Gallery', link: '/gallery' },
        { id: 4, label: 'News & Updates', link: '/news' },
        { id: 5, label: 'Contact', link: '/contact' },
    ];

    return (
        <header className='header'>
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