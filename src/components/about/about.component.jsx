import React from 'react';

import './about.styles.scss';

const About = () => {
    return (
        <div id='about'>
            <div className='about-info'>
                <p className='title'>Quem sou eu?</p>
                <div className='description'>
                    <p>Olá, me chamo Ramon. Sou desenvolvedor full stack MERN e trabalho com construção de websites e aplicativos modernos.</p>
                    <p>Você trabalhará diretamente comigo e com minha pequena equipe de especialistas escolhida a dedo para garantir que seu projeto seja executado no prazo, dentro do orçamento e com qualidade de classe mundial.</p>
                    <p>Fazemos parceria com nossos clientes remotamente e expandimos nossa equipe conforme necessário para dar vida a seus projetos.</p>
                    <p>Obtenha todos os benefícios de contratar uma agência, sem complicações ou despesas.</p>
                </div>
                <button className='btn-about'> Meu Linkedin <i style={{marginLeft: '20px'}} className="fab fa-linkedin-in"></i> </button>
            </div>
            <div className='about-image'>
                <div className='image-container'>
                    <img className='img' src="images/perfil.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About;