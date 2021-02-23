import {useState} from 'react';
import CountContext from './CountContext';
// import ChildOne from './ChildOne';
import InBetween from './InBetween';
import ChildTwo from './ChildTwo';

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Context Counter</h2>
      <CountContext.Provider value={{count, setCount}}>
        {/* <ChildOne /> */}
        <InBetween />
        <ChildTwo />
      </CountContext.Provider>
    </div>
  );
};

export default Parent;
