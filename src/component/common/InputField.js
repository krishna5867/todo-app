import React from 'react';

const InputField = ({ type = 'text', name, placeholder, value, handleChange }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name} 
                onChange={handleChange}
                className='w-full m-2 p-2 rounded-sm border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
        </div>
    );
};

export default InputField;


