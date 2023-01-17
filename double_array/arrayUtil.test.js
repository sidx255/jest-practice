
const {doubleNumbers} = require('./arrayUtil');

describe ('Array Utilities', () =>
describe('Double Numbers', () => {
    it('Should double the elements when the input is an array', () => {
        const result = doubleNumbers([1, 2, 3]);
        expect(result).toEqual([2, 4, 6]);
    });

    it('Should return -1 when input is not an array', () => {
        const result = doubleNumbers(4);
        expect(result).toEqual(-1);
    });
    })
);