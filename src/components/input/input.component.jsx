import React from 'react';

import './input.styles.scss';

const Input = ({ label, inputType, name, value ,handleChange }) => {
    return (
        <div>
            <label htmlFor={name} className='label'>{label}</label>
            <input 
                className='input' 
                type={inputType} 
                name={name} 
                value={value}
                id={name} 
                onChange={handleChange} 
                required
            />
        </div>
    )
}

export default Input;