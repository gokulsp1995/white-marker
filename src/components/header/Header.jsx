import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserCircle } from '@phosphor-icons/react';
import { Pivot as Hamburger } from 'hamburger-react'
import { Container } from '../../components';
import Logo from '../../assets/img/logo.svg';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

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
                                <NavLink to='/' className='header__nav--link'>Home</NavLink>
                                <NavLink to='/about' className='header__nav--link'>About Us</NavLink>
                                <NavLink to='/course' className='header__nav--link'>Courses</NavLink>
                                <NavLink to='/facility' className='header__nav--link'>Facilities</NavLink>
                                <NavLink to='/news' className='header__nav--link'>News & Updates</NavLink>
                                <NavLink to='/contact' className='header__nav--link'>Contact</NavLink>
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