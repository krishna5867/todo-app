import React, { useState } from 'react'
import img1 from "../../assets/img.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import Button from '../common/Button'


const ImgCarousels = () => {
    const data = [img1,img2, img3];
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + data.length) % data.length);
    };

  return (
      <div className='mt-20 relative flex justify-center items-center gap-4'>
        <Button variant='secondary' onClick={handlePrev}>prev</Button>
        <img src={data[index]} alt="img" className='w-[500px] h-[500px]' />
        <Button variant='secondary' onClick={handleNext}>Next</Button>
    </div>
  )
}

export default ImgCarousels