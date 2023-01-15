
// using regular function
function checkEnd(str) {
    if (str.length >= 6 && str.slice(-6) === "Script")
        return true;
    else return false;
}

// using arrow function
const checkEndArrow = str => {
    if (str.length >= 6 && str.slice(-6) === "Script")
        return true;
    else return false;
}

// console.log(checkEnd("JavavavavavavaScript"));
// console.log(checkEnd("Script"));
// console.log(checkEnd("cript"));
// console.log(checkEnd("Jscript"));

module.exports = { checkEnd, checkEndArrow };