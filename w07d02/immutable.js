const userOne = {
  name: 'Alice',
  age: 24,
  stomach: ['poutine']
};

// const userTwo = userOne;

const userTwo = {
  ...userOne,
  name: 'Bob',
  stomach: [
    ...userOne.stomach,
    'PIZZA',
    'sushi',
    'bread',
    'costco hot dogs'
  ]
};

// userTwo.stomach.push('PIZZA', 'sushi', 'bread');

// userTwo.name = 'Bob';

console.log(userOne);
console.log(userTwo);
