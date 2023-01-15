
const { countVowel, countVowelArrow } = require('./count_vow');

describe('counting vowels', () => {
    test('Siddharth should give 2', () => {
        expect(countVowel("Siddharth")).toBe(2);
    });
    test('Nalapad should give 3', () => {
        expect(countVowel("Nalapad")).toBe(3);
    })
});

describe('counting vowels using arrow function', () => {
    test('.....asd should give 1', () => {
        expect(countVowelArrow(".....asd")).toBe(1);
    });
    test('Engineer should give 4', () => {
        expect(countVowelArrow("Engineer")).toBe(4);
    })
});