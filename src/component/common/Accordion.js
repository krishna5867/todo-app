import React from 'react'
import Button from './Button'

const Accordion = ({ question, answer, isOpen, onToggle  }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen((prev) => !prev)
  // }

  return (
    <div className='bg-white p-4 rounded-md my-4'>
      <div>
        <div className='flex justify-between'>
          <h3>{question}</h3>
          <Button 
          variant='primary' 
          className='rounded-full w-6 h-6 flex justify-center items-center' 
          onClick={onToggle}>{isOpen ? "-" : "+"}
          </Button>
        </div>
        {isOpen && (
          <p>{answer}</p>
        )}
      </div>

    </div>
  )
}

export default Accordion