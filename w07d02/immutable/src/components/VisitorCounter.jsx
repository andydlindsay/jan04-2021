import { useState } from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((oldCounterValue) => oldCounterValue + 1);
    setCounter((prevState) => {
      return prevState + 1;
    });
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Counter</h2>
      <h2>Count: {counter}</h2>
      <button onClick={clickHandler}>New Visitor</button>
    </div>
  );
};

export default VisitorCounter;
