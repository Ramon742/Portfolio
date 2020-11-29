import React from 'react';

import './side-bar.styles.scss';


const SideBar = ({ handleSideBar, showSide }) => {
    return (
        <div className={ showSide ? 'sidebar-container' : 'sidebar-container sidebar-out'}>
            <div className='icon'>
                <i onClick={handleSideBar} className="fas fa-times"></i>
            </div>
            <div className='links-side'>
                <a onClick={handleSideBar} className='link-side' href='#services'>Serviços</a>
                <a onClick={handleSideBar} className='link-side' href='#projects'>Trabalho</a>
                <a onClick={handleSideBar} className='link-side' href='#about'>Sobre mim</a>
                <a onClick={handleSideBar} className='link-side' href='#contact'>Contato</a>
            </div>
        </div>
    )
}

export default SideBar;