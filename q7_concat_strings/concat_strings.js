
function concatStr(arr){
  if(arr.length==2)
    return arr[0].slice(1, arr[0].length)+arr[1];
}

const concatStrArrow = arr => {
  if(arr.length==2)
    return arr[0].slice(1, arr[0].length)+arr[1];
};

//arr = ["Siddharth", "Sharma"];
//console.log(concatStr(arr));

module.exports = {concatStr, concatStrArrow};