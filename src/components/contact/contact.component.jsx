import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './contact.styles.scss';

import Input from '../input/input.component';

const Contact = ({ portuguese }) => {

    const [ sent, setSent ] = useState(false);
    const [ err, setErr ] = useState(false);
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4kt7jcb', 'template_aqd4074', e.target, 'user_y5M7NiLcK4Hxg8we8KfH7')
          .then((result) => {
              setSent(true);
          }, (error) => {
              setErr(true);
          });
          e.target.reset();
      }

    return (
        <div id='contact'>

            <div className='info'>
                <p className='title'>{portuguese ? 'Contato' : 'Contact'}</p>
                <p className='description'>
                    {portuguese ? 'Entre em contato conosco e nos informe como podemos te ajudar.' : 'Contact us and let us know how we can help you.'}
                </p>
            </div>

            <div className='contact-container'>
                <div className='contact-image'>
                    <img src="images/message.png" width='350' alt="contact"/>
                </div>

                <div className='contact-form'>
                    {
                        portuguese ?
                        <form className='form' onSubmit={sendEmail}>
                            <Input 
                                label='Nome' 
                                inputType='text' 
                                name='name' 
                                required
                            />
                            <Input 
                                label='Email' 
                                inputType='email' 
                                name='email' 
                                required
                            />
                            <Input 
                                label='Número para contato' 
                                inputType='text' 
                                name='phone' 
                                required
                            />
                            <div>
                                <label className='label' htmlFor="message">Mensagem</label>
                                <textarea 
                                    className='input' 
                                    id="message"
                                    name='message'
                                    required
                                    ></textarea>
                            </div>

                            {
                                sent && <div className='success-message'>Mensagem enviada com sucesso !</div>
                            }
                        
                        <button className={sent ? 'btn-contact-disabled' : 'btn-contact'} disabled={sent}>Enviar <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
                    </form>
                    :
                    <form className='form' onSubmit={sendEmail}>
                        <Input 
                            label='Name' 
                            inputType='text' 
                            name='name' 
                        />
                        <Input 
                            label='Email' 
                            inputType='email' 
                            name='email' 
                        />
                        <Input 
                            label='phone' 
                            inputType='text' 
                            name='phone' 
                        />
                        <div>
                            <label className='label' htmlFor="message">Message</label>
                            <textarea 
                                className='input' 
                                id="message"
                                name='message'
                                required
                                ></textarea>
                        </div>

                        {
                            sent && <div className='success-message'>Message sent!</div>
                        }
                        
                        <button className={sent ? 'btn-contact-disabled' : 'btn-contact'} disabled={sent}>Enviar <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
                    </form>

                    }
                    
                    <div>
                        
                        {
                            err && <div className='error-message'>Houve um erro ao tentar enviar, por favor tente novamente mais tarde.</div>
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact;