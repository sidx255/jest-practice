
// using regular function
function replaceChars(str){
    let newstr = '';
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            if (str.charCodeAt(i) + 1 == 123) newstr+='a';
            else newstr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
     }
     return newstr;
}

//using arrow function
const replaceCharsArrow = str => {
    let newstr = '';
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            if (str.charCodeAt(i) + 1 == 123) newstr+='a';
            else newstr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
     }
     return newstr;
}

//let str = "lazyinterns";
//console.log(replaceChars(str));

module.exports = {replaceChars, replaceCharsArrow};