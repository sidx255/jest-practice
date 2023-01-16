
const {leapYear, leapYearArrow} = require('./leap_year');

describe('finding leap year', () => {
  test('2004 should give true', () => {
    expect(leapYear(2004)).toBe(true);
  });
  test('2001 should give false', () => {
    expect(leapYear(2001)).toBe(false);
  });
});

describe('finding leap year using arrow function', () => {
  test('1996 should give true', () => {
    expect(leapYearArrow(1996)).toBe(true);
  });
  test('1911 should give false', () => {
    expect(leapYearArrow(1991)).toBe(false);
  });
});