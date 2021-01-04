import React from 'react';

import CardService from '../card-service/card-service.component';

import { servicesPt, servicesEn } from './services.js';

import './services.styles.scss';

const Services = ({ portuguese }) => {
    return (
        <div id='services'>
            <div className='services-info'>
                <div style={{flexBasis: '650px'}}>
                    <span className='title-service'>{portuguese ? 'Meus Serviços' : 'My services'}</span>
                    <p className='text-service'>
                        {portuguese ? 'Um site é uma forma única de se conectar com o mundo. Seja para compartilhar sua paixão pela música, informar as pessoas sobre seu negócio, vender produtos ou qualquer outro motivo, não há limites para o que você pode fazer! Com um site, inúmeras possibilidades estão disponíveis para você!' 
                        : 
                        "A website is a unique way to connect with the world. Whether it's to share your passion for music, inform people about your business, sell products or any other reason, there are no limits to what you can do! With a website, countless possibilities are available to you!"}
                    </p>
                </div>
                <button className='btn-services'>{portuguese ? 'Criar Projeto' : 'Create Project'} <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
            </div>
            <div className='list-services'>  

            {
                portuguese ?
                    servicesPt.map( ({ id, ...otherProps }) => (
                        <CardService key={id} {...otherProps} portuguese={portuguese}  />
                    ))
                :
                    servicesEn.map( ({ id, ...otherProps }) => (
                        <CardService key={id} {...otherProps} portuguese={portuguese}  />
                    ))
            }

                
            </div>
        </div>
    )
}

export default Services;