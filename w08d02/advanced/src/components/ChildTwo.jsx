import { useContext } from 'react';
import CountContext from './CountContext';

const ChildTwo = () => {
  const {count} = useContext(CountContext);

  return (
    <div>
      <h2>Child Two</h2>
      <h2>Current count: {count}</h2>
    </div>
  );
};

export default ChildTwo;
