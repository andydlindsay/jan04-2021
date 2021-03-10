// arguments that they take in
// return value they give back

// const sayHello = (name: string, age: number, isLoggedIn?: boolean) => {
//   console.log(`hello there ${name} you are ${age} years old`);
// };

const sayHello = (name: string, age: number): string => {
  return `hello there ${name} you are ${age} years old`;
};

const result: string = sayHello('alice', 20);

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
};

// Higher Order Function
const myHigherOrder = (cb: (num: number) => boolean, age?: number) => {
  cb(5);
};

myHigherOrder((myNum: number) => { return false; });



