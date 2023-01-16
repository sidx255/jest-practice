//var num = 0;
//var num2 = -12;

// using regular function
function areSame(num) {
  var arr = String(num).split('');
  return arr.every(function (el) { return el === arr[0]; });
}

// using arrow function
const areSameArrow = num => {
  var arr = String(num).split('');
  return arr.every(function (el) { return el === arr[0]; });
};

//console.log(areSameArrow(num));
//console.log(areSameArrow(num2));

module.exports = { areSame, areSameArrow };