import { useContext } from 'react';
import CountContext from './CountContext';

const ChildOne = () => {
  const {setCount} = useContext(CountContext);

  const clickHandler = () => {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h2>Child One</h2>
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
};

export default ChildOne;
