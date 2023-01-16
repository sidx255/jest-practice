// Using normal function
function largestEven(nums) {
    let evenNum = -1;
    //console.log(evenNum);
    nums.forEach(val => {
        evenNum = val % 2 === 0 && evenNum < val ? val : evenNum;
    })
    return evenNum;
}

// Using arrow function
const largestEvenUsingArrowFunction = (nums) => {
    let evenNum = -1;
    //console.log(evenNum);
    nums.forEach(val => {
        evenNum = val % 2 === 0 && evenNum < val ? val : evenNum;
    })
    return evenNum;
}

module.exports = { largestEven, largestEvenUsingArrowFunction };