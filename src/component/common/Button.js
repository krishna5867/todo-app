import React from 'react'

const Button = ({ onClick, children, className='', variant = 'primary' }) => {

    const buttonVariant = (variant) => {
        switch (variant) {
            case 'primary':
                return 'bg-gray-300 text-black';
            case 'secondary':
                return 'bg-blue-500 text-white';
            default:
                return 'border border-black';
        }
    }
    return (
        <button onClick={onClick} className={`p-2 rounded-sm ${buttonVariant(variant)} ${className}`}>{children}</button>
    )
}

export default Button;