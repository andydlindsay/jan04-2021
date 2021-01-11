const assert = require('chai').assert;
const numOfVowels = require('../numOfVowels');

describe('tests for numOfVowels function', () => {

  it('should return 3 when given "orange"', () => {
    const actual = numOfVowels('orange');
    const expected = 3;

    assert.typeOf(actual, 'number');
    assert.equal(actual, expected);
  });

  it('should return 5 when given "lighthouse labs"', () => {
    const actual = numOfVowels('lighthouse labs');
    const expected = 5;

    assert.typeOf(actual, 'number');
    assert.equal(actual, expected);
  });

  it('should return 5 when given "aeiou"', () => {
    const actual = numOfVowels('aeiou');
    const expected = 5;

    assert.typeOf(actual, 'number');
    assert.equal(actual, expected);
  });

  it('should return null if not given anything', () => {
    const actual = numOfVowels();
    const expected = null;

    assert.isNull(actual);
    assert.equal(actual, expected);
  });

});
