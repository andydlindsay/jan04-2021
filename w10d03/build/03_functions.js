"use strict";
// arguments that they take in
// return value they give back
// const sayHello = (name: string, age: number, isLoggedIn?: boolean) => {
//   console.log(`hello there ${name} you are ${age} years old`);
// };
const sayHello = (name, age) => {
    return `hello there ${name} you are ${age} years old`;
};
const result = sayHello('alice', 20);
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num);
    });
};
// Higher Order Function
const myHigherOrder = (cb, age) => {
    cb(5);
};
myHigherOrder((myNum) => { return false; });
