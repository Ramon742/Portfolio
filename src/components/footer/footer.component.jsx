import React from 'react';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div id='footer'>
            <div className='container-footer'>
                <div className='logo'>
                    <span className='name'>{'< Ramon />'}</span> 
                </div>

                <div className='contact'>
                    <div style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px'}}>Contato</div>
                        <div style={{marginTop: '10px'}}>
                            <span style={{fontWeight: '700'}}>Telefone: </span> 
                            <span> +55 (84) 99702-4323</span> 
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <span style={{fontWeight: '700'}}>Email: </span> 
                            <span> ramondavi.dev@gmail.com </span> 
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <span style={{fontWeight: '700'}}>Brazil - RN </span> 
                        </div>
                </div>

                <div className='social-network' >
                    <div style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px'}}>Redes Sociais</div>
                    <div className='links'> 
                        <a target="_blank" rel="noopener noreferrer" className='linkedin' href="https://www.linkedin.com/in/ramondavidev/"><i className="fab fa-linkedin fa-2x"></i></a> 
                        <a target="_blank" rel="noopener noreferrer" className='github' href="https://github.com/ramondavidev"><i className="fab fa-github-square fa-2x"></i></a>  
                    </div>
                </div>
            </div>
            <div className='copyright'>Todos os direitos reservados <i className="far fa-copyright"></i></div>
        </div>
    )
}

export default Footer;