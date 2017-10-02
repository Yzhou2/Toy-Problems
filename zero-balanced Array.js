//An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.

function isZeroBalanced(n){
  //1. make sure n is not empty array
  // 2.add all num in array together check if equals to 0,
  // 3.loop through each element to find a negative element


  if(n.length !== 0){
  var sum = n.reduce(function(a,b){return a + b});
  if (sum === 0){
    var removedArr = n.filter(function(num){return num !== 0})
    console.log(removedArr)
    return removedArr.every(function(num){return removedArr.includes(num * -1)})
  } else {
    return false;
  }
} else {
  return false
}
}
