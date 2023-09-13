import React, { useRef } from 'react';
import './style.css';
import Child from './child';

export default function App() {
  const childRef = useRef(null);
  const handleChild = () => {
    childRef.current?.focus();
  };
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleChild}>Call Child ref</button>
    </div>
  );
}
