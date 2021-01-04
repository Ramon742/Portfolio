import React, { useState } from 'react';

import SideBar from '../side-bar/side-bar.component';

import imageBrazil from './brazil.png';
import english from './english-language.png';

import './header.styles.scss';

const Header = ({ changeLanguageToPortuguese, changeLanguageToEnglish, portuguese }) => {
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
            <div className='languages'>
                    <span onClick={changeLanguageToPortuguese}><img src={imageBrazil} alt=""/></span>
                    <span onClick={changeLanguageToEnglish} ><img src={english} alt=""/></span>
                </div>
            <div className='pages'>
                <a className='link' href='#services'>{portuguese ? 'Serviços' : 'Services'}</a>
                <a className='link' href='#projects'>{portuguese ? 'Projetos' : 'Projects'}</a>
                <a className='link' href='#about'>{portuguese ? 'Sobre mim' : 'About'}</a>
                <a className='link' href='#contact'>{portuguese ? 'Contato' : 'Contact'}</a>
            </div>
            <span onClick={() => handleSideBar()} className='bars' href="#"><i className="fas fa-bars"></i></span>
        </div>
    )
}

export default Header;