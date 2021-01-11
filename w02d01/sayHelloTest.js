const assert = require('assert').strict;
// const sayHello = require('./sayHello');
const ourFuncs = require('./sayHello');

const actualOne = ourFuncs.sayHello('Alice');
const expectedOne = 'hello Alice';

assert.equal(actualOne, expectedOne);

const actualTwo = ourFuncs.sayHello('Bob');
const expectedTwo = 'hello Bob';

assert.equal(actualTwo, expectedTwo);
