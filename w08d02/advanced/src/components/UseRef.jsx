import {useRef, useState} from 'react';

const UseRef = () => {
  const inputRef = useRef();
  const counterRef = useRef();
  const [counter, setCounter] = useState(0);
  counterRef.current = counter;

  const handleClick = () => {
    inputRef.current.focus();
  };

  const showAlert = () => {
    setTimeout(() => {
      alert(counterRef.current);
    }, 3000);
  };

  return (
    <div>
      <h2>Use Ref</h2>
      <input ref={inputRef} />
      <button onClick={handleClick}>Set Focus</button>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>current count: {counter}</h2>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  )
};

export default UseRef;
