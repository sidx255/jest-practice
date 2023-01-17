
// using map and filter
const tripleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Not an array');
    }
    if (numbers.some(isNaN)) {
        throw new Error('Not an array of numbers');
    }

    const tripledNumbers = numbers.map(num => num * 3)
    const tripledEvenNumbers = tripledNumbers.filter(x => x % 2 == 0);
    return tripledEvenNumbers;
}


// using reduce
const tripleNumbersUsingReduce = (numbers) => {
    if (!Array.isArray(numbers)) {
        return -1;
    }
    if (numbers.some(isNaN)) {
        throw new Error('Not an array of numbers');
    }

    return numbers.reduce((acc, item) => { // () means callback, item is the array[0], acc is empty array
        if ((item * 3) % 2 == 0) {
            acc.push(item * 3);
        }
        return acc;
    }, []); // previous value = array which is empty
}

console.log(tripleNumbersUsingReduce([1, 2, 3, 4]))

module.exports = { tripleNumbers, tripleNumbersUsingReduce };