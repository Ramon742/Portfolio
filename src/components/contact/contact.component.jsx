import React, { useState } from 'react';

import './contact.styles.scss';

import Input from '../input/input.component';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        text: ''
    });

    const { email, name, subject, text } = formData;


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <div id='contact'>

            <div className='info'>
                <p className='title'>Contato</p>
                <p className='description'>Entre em contato conosco e nos informe como podemos te ajudar.</p>
            </div>

            <div className='contact-container'>
                <div className='contact-image'>
                    <img src="images/message.png" width='350' alt=""/>
                </div>

                <div className='contact-form'>
                    <form className='form'>
                        <Input 
                            label='Email' 
                            inputType='email' 
                            name='email' 
                            value={email}
                            handleChange={handleChange} 
                        />
                        <Input 
                            label='Nome' 
                            inputType='text' 
                            name='name' 
                            value={name}
                            handleChange={handleChange} 
                        />
                        <Input 
                            label='Subject' 
                            inputType='text' 
                            name='subject' 
                            value={subject}
                            handleChange={handleChange} 
                        />
                        <div>
                            <label className='label' htmlFor="message">Mensagem</label>
                            <textarea 
                                className='input' 
                                id="message"
                                onChange={handleChange}
                                name='text'
                                value={text}
                                ></textarea>
                        </div>
                        
                        <button className='btn-contact'>Enviar <i style={{marginLeft: '20px'}} className="fas fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact;