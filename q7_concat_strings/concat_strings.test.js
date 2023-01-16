
const { concatStr, concatStrArrow } = require('./concat_strings');

describe('concatinating strings', () => {
  test('Java and Script should give avaScript', () => {
    expect(concatStr(['Java', 'Script'])).toBe('avaScript');
  });
  test('Sid and Sharma should give idSharma', () => {
    expect(concatStr(['Sid', 'Sharma'])).toBe('idSharma');
  });
});

describe('concatinating strings using arrow function', () => {
  test('Concat and Strings should give oncatStrings', () => {
    expect(concatStrArrow(['Concat', 'Strings'])).toBe('oncatStrings');
  });
  test('Code and Academy should give odeAcademy', () => {
    expect(concatStrArrow(['Code', 'Academy'])).toBe('odeAcademy');
  });
});