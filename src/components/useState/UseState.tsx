import React, { useEffect, useState } from 'react';
import Count from './UseStateCounter';

interface AppProps {}

const LOCAL_STORAGE_KEY = "count";

const UseStateHook: React.FC<AppProps> = () => {
  const [count, setCount] = useState(()=>{
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(count));
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Use state for counter</h1>
      <Count count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </>
  );
};

export default UseStateHook;