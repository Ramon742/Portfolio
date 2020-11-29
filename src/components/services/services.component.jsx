import React from 'react';

import CardService from '../card-service/card-service.component';

import { services } from './services.js';

import './services.styles.scss';

const Services = () => {
    return (
        <div id='services'>
            <div className='services-info'>
                <div style={{flexBasis: '650px'}}>
                    <span className='title-service'>Meus Serviços</span>
                    <p className='text-service'>Um site é uma forma única de se conectar com o mundo. Seja para compartilhar sua paixão pela música, informar as pessoas sobre seu negócio, vender produtos ou qualquer outro motivo, não há limites para o que você pode fazer! Com um site, inúmeras possibilidades estão disponíveis para você!</p>
                </div>
                <button className='btn-services'>Faça uma proposta <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
            </div>
            <div className='list-services'>  

            {
                services.map( ({ id, ...otherProps }) => (
                    <CardService key={id} {...otherProps}  />
                ))
            }

                
            </div>
        </div>
    )
}

export default Services;