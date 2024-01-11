import React, { FC, useState  } from 'react'
import { CountProps } from '../../Interface/interface';

const Count: FC<CountProps> = function({ count, onIncrement, onDecrement }) {
  return (
    <div className='flex items-center'>
      <button onClick={onDecrement}>-</button>
      <strong style={{padding: '1rem', fontSize:'14px'}}>{count}</strong>
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

export default Count;