import React from 'react';

import './projects.styles.scss';

import Project from '../project/project.component';

const Projects = ({ portuguese }) => {
    return (
        <div id='projects'>
            <div className='projects-text'>
                <div style={{flexBasis: '500px'}}>
                    <span style={{fontSize: '32px', fontWeight: 'bold'}}>{portuguese ? 'Meus Projetos' : 'My Projects'}</span>
                    <p style={{borderLeft: '4px solid #03045E', paddingLeft: '30px', color: '#414141', textAlign: 'justify'}}>
                        {portuguese ? 'Projetos desenvolvidos com tecnologias modernas, responsivos, escaláveis, otimizados e seguros. Veja alguns deles abaixo e click no link para acessa-los em modo teste.' 
                        : 
                        'Projects developed with modern technologies, responsive, scalable, optimized and safe. See some of them below and click on the link to access them in test mode.'}
                    </p>
                </div>
            </div>
            
            {
                portuguese ? 
                (
                    <span>
                        <Project
                            type='Ecommerce'
                            title='Loja de Roupas'
                            description ='É uma aplicação web construída com MERN para exibir produtos de moda online para venda.'
                            image='images/ecommerce.jpg'
                        />
                        <Project
                            type='Website'
                            title='Rede Social para Estudantes'
                            description ='É uma aplicação web construída com MERN que tende a conectar estudantes universitários e mostrar seu portfólio. Aqui você encontrará todos os tipos de recursos, como bate-papo, mensagens, comentários, discussões, projetos do github e muito mais.'
                            image='images/comunidade.png'
                        />
                    </span>
                ) : (
                    <span>
                        <Project
                            type='Ecommerce'
                            title='Clothing store'
                            description ='It is a web application built with MERN to display online fashion products for sale.'
                            image='images/ecommerce.jpg'
                        />
                        <Project
                            type='Website'
                            title='Social Network for Students'
                            description ='It is a web application built with MERN that tends to connect university students and display their portfolio. Here you will find all kinds of features such as chat, messages, comments, discussions, github projects and much more.'
                            image='images/comunidade.png'
                        />
                    </span>
                )
            }
        </div>
    )
}

export default Projects;