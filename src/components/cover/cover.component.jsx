import React from 'react';

import './cover.styles.scss';

const Cover = ({ portuguese }) => {
    return (
        <div id='cover'>
            <div className='info'>
                <span className='text'>
                    {portuguese ? 'VENHA CRIAR A SUA PRESENÇA DIGITAL' : 'CREATE YOUR DIGITAL PRESENCE NOW'}
                </span>
                <span className='sub-text'>
                {portuguese ? 'Guie seus clientes para os principais serviços e produtos que você oferece.' : 'Guide your customers to the main services and products you offer.'}
                </span>
                <div>
                    <button className='btn-services'>
                        {portuguese ? 'Criar projeto agora' : 'Create project now'}
                    </button>
                </div>
            </div>

            <div className='infos'>
                <p className='cover-info'>{portuguese ? 'Aplicações otimizadas' : 'Optimized applications'}</p>
                <p className='cover-info'>{portuguese ? 'Tecnologias em alta' : 'Rising technologies'}</p>
                <p className='cover-info'>{portuguese ? 'Melhores práticas do mercado' : 'Best market practices'}</p>
                <p className='cover-info'>{portuguese ? 'Designs modernos e focados no seu usuário' : 'Modern designs'}</p>
            </div>
            
        </div>
    )
}

export default Cover;