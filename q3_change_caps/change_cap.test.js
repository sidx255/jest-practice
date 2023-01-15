
const { changeCap, changeCapArrow } = require('./change_cap')

describe('changing case of letters', () => {
    test('sId should give "SiD"', () => {
        expect(changeCap("sId")).toBe("SiD");
    });
    test('SID should give "sid"', () => {
        expect(changeCap("SID")).toBe("sid");
    })
});

describe('changing case of letters using arrow function', () => {
    test('sHaRmA should give "ShArMa"', () => {
        expect(changeCapArrow("sHaRmA")).toBe("ShArMa");
    });
    test('sid. should give "SID."', () => {
        expect(changeCapArrow("sid.")).toBe("SID.");
    })
});