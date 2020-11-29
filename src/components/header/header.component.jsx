import React, { useState } from 'react';

import SideBar from '../side-bar/side-bar.component';

import './header.styles.scss';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [showSide, setShowSide] = useState(false);

    const handleSideBar = () => {
        setShowSide(!showSide);
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div id='header' className={navbar ? 'navbar-active' : null}>
            
            <SideBar handleSideBar={handleSideBar} showSide={showSide} />
            
            <a href='#cover' className='name'>Ramon</a>
            <div className='pages'>
                <a className='link' href='#services'>Serviços</a>
                <a className='link' href='#projects'>Trabalho</a>
                <a className='link' href='#about'>Sobre mim</a>
                <a className='link' href='#contact'>Contato</a>
            </div>
            <span onClick={() => handleSideBar()} className='bars' href="#"><i className="fas fa-bars"></i></span>
        </div>
    )
}

export default Header;