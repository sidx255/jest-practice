
const { checkEnd, checkEndArrow } = require('./script_end');

describe('checking the ending of string', () => {
  test('JavavavavavScript should give true', () => {
    expect(checkEnd('JavavavavavScript')).toBe(true);
  });
  test('Script should give true', () => {
    expect(checkEnd('Script')).toBe(true);
  });
});

describe('checking the ending of string using arrow function', () => {
  test('javascript should give false', () => {
    expect(checkEndArrow('javascript')).toBe(false);
  });
  test('java.Script should give true', () => {
    expect(checkEndArrow('java.Script')).toBe(true);
  });
});