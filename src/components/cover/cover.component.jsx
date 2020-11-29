import React from 'react';

import './cover.styles.scss';

const Cover = () => {
    return (
        <div id='cover'>
            <div className='info'>
                <span className='text'>VENHA CRIAR A SUA PRESENÇA DIGITAL</span>
                <div>
                    <button className='btn-services'>Vamos criar um projeto juntos?</button>
                </div>
            </div>

            <div className='infos'>
                <p className='cover-info'>Aplicações otimizadas</p>
                <p className='cover-info'>Tecnologias em alta</p>
                <p className='cover-info'>Melhores práticas do mercado</p>
                <p className='cover-info'>Designs modernos e focados no seu usuário</p>
            </div>
            
        </div>
    )
}

export default Cover;