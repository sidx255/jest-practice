const { largestEven } = require('./largest_even');
const { largestEvenUsingArrowFunction} = require('./largest_even');

describe('finding the largest even number', () => {
  test('[1, 2, 3, 4, 6] should give "6" ', () => {
    expect(largestEven([1, 2, 3, 4, 6])).toBe(6);
  });
  test('[1, 3, 5, 7] should give "-1" ', () => {
    expect(largestEven([1, 3, 5, 7])).toBe(-1);
  });
});

describe('finding the largest even number using arrow function', () => {
  test('[-11, 2, 3, 4, 8] should give "8" ', () => {
    expect(largestEvenUsingArrowFunction([-11, 2, 3, 4, 8])).toBe(8);
  });
  test('[1, 3, 5, 7] should give "-1" ', () => {
    expect(largestEvenUsingArrowFunction([1, 3, 5, 7])).toBe(-1);
  });
});