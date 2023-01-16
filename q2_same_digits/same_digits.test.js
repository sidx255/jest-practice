
const {areSame, areSameArrow} = require('./same_digits');

describe('finding monotonous numbers', () => {
  test('111 should give true', () => {
    expect(areSame(111)).toBe(true);
  });
  test('12 should give false', () => {
    expect(areSame(12)).toBe(false);
  });
});

describe('finding monotonous numbers using arrow function', () => {
  test('0 should give true', () => {
    expect(areSameArrow(0)).toBe(true);
  });
  test('-12 should give false', () => {
    expect(areSameArrow(-1)).toBe(false);
  });
});