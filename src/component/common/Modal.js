import React, {useRef} from 'react'
import Button from './Button'
import useClickOutside from '../hooks/useClickOutside';

const Modal = ({ isOpen, onClose, title, children }) => {
    
    const modalRef = useRef(null);
    
    useClickOutside(modalRef, onClose);
    
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-4 rounded-lg shadow-lg" ref={modalRef}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <Button variant='secondary' onClick={onClose}>X</Button>
                </div>
                <div className='flex justify-center items-center h-full'>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Modal