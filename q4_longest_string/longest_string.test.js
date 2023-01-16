
const {longestString, longestStringArrow} = require('./longest_string');

describe('finding longest string', () => {
  test('111 should give true', () => {
    expect(longestString(['we', 'love', 'code', 'academy'])).toBe('academy');
  });
  test('12 should give false', () => {
    expect(longestString(['my', 'name', 'is', 'siddharth'])).toBe('siddharth');
  });
});

describe('finding longest string using arrow function', () => {
  test('0 should give true', () => {
    expect(longestStringArrow(['football', 'sucks'])).toBe('football');
  });
  test('-12 should give false', () => {
    expect(longestStringArrow(['', 'i', 'am', 'done'])).toBe('done');
  });
});