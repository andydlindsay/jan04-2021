import { useState } from 'react';

const setCrustType = (event, setPizza) => {
  const newCrustType = event.target.value;
  // pizza.crustType = newCrustType;
  // setPizza({...pizza, crustType: newCrustType});
  setPizza((prevPizza) => {
    return {
      ...prevPizza,
      crustType: newCrustType
    }
  });
};

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('thin');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'thin'
  });

  

  const addTopping = () => {
    // toppings.push(newTopping); // don't do this
    // setToppings([...toppings, newTopping]);
    // setToppings((prevToppings) => {
    //   return [...prevToppings, newTopping];
    // });

    // setPizza({
    //   ...pizza,
    //   toppings: [
    //     ...pizza.toppings,
    //     newTopping
    //   ]
    // });

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      }
    });

    setNewTopping('');
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust Type: {pizza.crustType}</h2>
        <input 
          value={pizza.crustType}
          onChange={(event) => setCrustType(event, setPizza)}
        />
      </div>

      <div>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add Topping</button>
      </div>

      <h2>Toppings:</h2>
      { pizza.toppings.map((topping, index) => {
        return <p key={index}>{topping}</p>;
      })}
    </div>
  );
};

export default Pizza;
