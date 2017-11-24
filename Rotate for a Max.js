// Take a number: 56789. Rotate left, you get 67895.
//
// Keep the first digit in place and rotate left the other digits: 68957.
//
// Keep the first two digits in place and rotate the other ones: 68579.
//
// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
//
// You have the following sequence of numbers:
//
// 56789 -> 67895 -> 68957 -> 68579 -> 68597
//
// and you must return the greatest: 68957.
//
// Calling this function max_rot (or maxRot or ... depending on the language)
//
// max_rot(56789) should return 68957

function maxRot(n) {
  if (n.toString().length > 1 ) {
  var maxNum = 0;
  var newStr = n.toString().split('');

  for (var i = 0; i < newStr.length - 1; i++) {

      var num1 = newStr.splice(i,1)
      newStr = newStr.concat(num1)

      console.log(+newStr.join(''), 'shifteddddd')

    if (+newStr.join('')>maxNum) {
      console.log('hihihihihi')
      maxNum = Number(newStr.join(''))
    } else {
      if (maxNum > n) {
      maxNum = maxNum
      } else {
        maxNum = n
      }
    }
  }

  console.log(maxNum < n)
  return maxNum.toString().length<n.toString().length?n:maxNum;
  } else {
    return n
  }

}
