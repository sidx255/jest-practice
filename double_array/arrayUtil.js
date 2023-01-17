const doubleNumbers = (numbers) => {
    if(!Array.isArray(numbers)){
        return -1;
    }
    
    const result = numbers.map(num => num*2)
    return result;
}

module.exports = { doubleNumbers };