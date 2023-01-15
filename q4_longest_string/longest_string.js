//let arr = ["we", "love", "code", "academy"];

// using regular function
function longestString(arr) {
    let result = arr.reduce((r, e) => r.length < e.length ? e : r, "");
    return result;
};

// using arrow function
const longestStringArrow = arr => {
    let result = arr.reduce((r, e) => r.length < e.length ? e : r, "");
    return result;
};

module.exports = {longestString, longestStringArrow}
//console.log(longestString(arr));
//console.log(longestStringArrow(arr));