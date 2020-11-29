import React from 'react';

import './projects.styles.scss';

import Project from '../project/project.component';

const Projects = () => {
    return (
        <div id='projects'>
            <div className='projects-text'>
                <div style={{flexBasis: '500px'}}>
                    <span style={{fontSize: '32px', fontWeight: 'bold'}}>Trabalhos</span>
                    <p style={{borderLeft: '4px solid #03045E', paddingLeft: '30px', color: '#414141', textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, doloribus natus? Odio, porro ut, dignissimos alias doloribus voluptatum.</p>
                </div>
            </div>
            
            <Project
                type='Ecommerce'
                title='Loja de Roupas e Calçados'
                description ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum deleniti explicabo voluptates iure hic veritatis repellendus, nisi excepturi quos maiores cumque, dolores consequuntur nulla blanditiis aspernatur sit molestiae quae?'
                image='images/ecommerce.jpg'
            />
            <Project
                type='Website'
                title='Rede Social para Estudantes'
                description ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum deleniti explicabo voluptates iure hic veritatis repellendus, nisi excepturi quos maiores cumque, dolores consequuntur nulla blanditiis aspernatur sit molestiae quae?'
                image='images/comunidade.png'
            />
        </div>
    )
}

export default Projects;