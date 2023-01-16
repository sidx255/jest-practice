
// using regular function
function countVowel(str){
  let newstr = str.toLowerCase();
  let m = newstr.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// using arrow function
const countVowelArrow = str => {
  let newstr = str.toLowerCase();
  let m = newstr.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
};
//console.log(countVowelArrow("SIDDHarth"));
module.exports = {countVowel, countVowelArrow};