import React, { useReducer } from 'react'
import Button from '../common/Button'

const initialState = 0;

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

const CounterApp = () => {
    const [count, dispatch] = useReducer(counterReducer, initialState);


    return (
        <div className='flex flex-col justify-center items-center h-[500px]'>
            <h2>CounterApp using UseReducer function</h2>

            <div className="flex gap-x-4 mt-20">
                <Button variant="secondary" onClick={() => dispatch({ type: 'decrement' })} className='px-6'>-</Button>
                <Button className='text-4xl px-6'>{count}</Button>
                <Button variant="secondary" onClick={() => dispatch({ type: 'increment' })} className='px-6'>+</Button>
            </div>
        </div>
    )
}

export default CounterApp