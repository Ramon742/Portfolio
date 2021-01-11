import React from 'react';

import './project.styles.scss';

const Project = ({ type, title, description, image, firstProject }) => {
    return (
        <div id='project'>
            <div className='project-info'>
                <div className='project-header'>
                    <span className='type'>{type}</span>
                    <p className='title'>{title}</p>
                </div>
                <p className='description'>{description}</p>
                <a target="_blank" rel="noopener noreferrer" href={ firstProject ? 'https://newstorept.herokuapp.com/login' : 'https://uniufersa.herokuapp.com/'}>
                    <button className='btn-project'>Veja o projeto completo <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
                </a>
            </div>
            <span className='img-container'>
                <img className='img' src={image} alt="project"/>
            </span>
        </div>
    )
}

export default Project;