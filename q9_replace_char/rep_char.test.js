
const { replaceChars, replaceCharsArrow } = require('./rep_char');

describe('replacing by next character', () => {
    test('lazyinterns should give mbazjoufsot', () => {
        expect(replaceChars("lazyinterns")).toBe("mbazjoufsot");
    });
    test('codeacademy should give dpefbdbefnz', () => {
        expect(replaceChars("codeacademy")).toBe("dpefbdbefnz");
    })
});

describe('replacing by next character using arrow function', () => {
    test('siddharth should give tjeeibsui', () => {
        expect(replaceCharsArrow("siddharth")).toBe("tjeeibsui");
    });
    test('sharma should give tibsnb', () => {
        expect(replaceCharsArrow("sharma")).toBe("tibsnb");
    })
});