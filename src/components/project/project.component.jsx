import React from 'react';

import './project.styles.scss';

const Project = ({ type, title, description, image }) => {
    return (
        <div id='project'>
            <div className='project-info'>
                <div className='project-header'>
                    <span className='type'>{type}</span>
                    <p className='title'>{title}</p>
                </div>
                <p className='description'>{description}</p>
                <button className='btn-project'>Veja o projeto completo <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
            </div>
            <span className='img-container'>
                <img className='img' src={image} alt=""/>
            </span>
        </div>
    )
}

export default Project;