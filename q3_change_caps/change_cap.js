
//str1 = "sIddhartH";
//str2 = "SHARma";

// using normal function
function changeCap(str) {
  var str1 = '';
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) str1 += str[i].toLowerCase();
    else str1 += str[i].toUpperCase();
  }
  return str1;
}

// using arrow function
const changeCapArrow = str => {
  var str1 = '';
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) str1 += str[i].toLowerCase();
    else str1 += str[i].toUpperCase();
  }
  return str1;
};

module.exports = {changeCap, changeCapArrow};

//console.log(changeCap(str2));
//console.log(changeCapArrow(str1));