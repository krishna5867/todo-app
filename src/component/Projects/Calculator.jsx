import React, { useState } from 'react'
import InputField from '../common/InputField';
import Button from '../common/Button';

const Calculator = () => {
    const [inpVal, setInpVal] = useState('');

    const handleInsert = (value) => {
        setInpVal((prev) => prev + value);
    }

    const handleCalculate = () => {
        setInpVal(eval(inpVal).toString());
    }

    const handleClear = () => {
        setInpVal('');
    }

    const handleEdit = () => {
        setInpVal(inpVal.slice(0, -1));
    }
    return (
        <div>
            <h2> Calculator</h2>
            <InputField placeholder="ex-2+3" value={inpVal} onChange={(e) => setInpVal(e.target.value)} />
            <div className='grid grid-cols-3 gap-2 mt-4'>
                {Array(9).fill(null).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleInsert((idx + 1).toString())}
                        className="bg-gray-300 p-2"
                    >
                        {idx + 1}
                    </button>
                ))}
            <Button onClick={() => handleInsert('0')}>0</Button>
            <Button onClick={() => handleInsert('+')}>+</Button>
            <Button onClick={() => handleInsert('-')}>-</Button>
            <Button onClick={() => handleInsert('*')}>*</Button>
            <Button onClick={() => handleInsert('/')}>/</Button>
            <Button onClick={handleCalculate} variant='secondary'>Calculate</Button>
            <Button onClick={handleEdit}>X</Button>
            <Button onClick={handleClear}>C</Button>
            </div>
        </div>
    )
}

export default Calculator