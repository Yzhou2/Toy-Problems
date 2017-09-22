//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
  var newArr = arr.filter(num => num !== 0)// remove all the 0s
  var count = arr.length - newArr.length;// count the amount of 0
  var zeros = '0'.repeat(count).split('').map(num => Number(num));
  var movedArr = newArr.concat(zeros)
  return movedArr// adding 0s to the end of the array

}
