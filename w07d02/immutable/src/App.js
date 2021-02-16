import './App.css';
import { useState } from 'react';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  const [title] = useState(`Pat's Pizza Place`);

  return (
    <div className="App">
      {/* <Header
        heading="hello world"
        whatever="more stuff"
        anotherKey="yet more stuff"
      /> */}
      <Header heading={title} />
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
