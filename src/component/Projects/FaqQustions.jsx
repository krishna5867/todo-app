import React, { useState } from 'react'
import { Button, Modal } from '../common'
import LoginForm from './LoginForm'
import Accordion from '../common/Accordion';

const questions = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is a component?", answer: "A component is a reusable piece of UI in React." },
    { question: "What is state in React?", answer: "State is an object that holds data that may change over the lifecycle of the component." },
];


const FaqQustions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        console.log(index);
        
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        <div className='relative'>
            <Button variant='secondary' onClick={() => setIsModalOpen(true)} className='mt-4'>Open Modal</Button>

            {questions.map((item, index) => (
                <Accordion
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Model">
                <LoginForm />
            </Modal>
        </div>
    )
}


export default FaqQustions