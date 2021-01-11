const assert = require('assert').strict;
const ourFuncs = require('../sayHello');
const sayHello = ourFuncs.sayHello;

describe('tests for the sayHello function', () => {

  it('should return "hello Alice" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello Alice';

    assert.equal(actual, expected);
  });

});
