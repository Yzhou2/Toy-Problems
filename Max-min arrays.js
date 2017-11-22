// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the
// first max value is followed by the first minimum, followed by second max value then second min value, etc.
//
// For example:
//
// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12and the second min is 10 and so on.
//
// More examples in the test cases.
//
// Good luck!





function solve(arr){

    var newArr = [];

    do {

      // console.log('-----------------')

      arr.sort(function(a,b){return a - b;})

      // console.log(arr)

      var max = arr.pop();

      newArr.push(max)

      var min = arr.shift()

      newArr.push(min)

      // console.log(max, 'max');

      // console.log(min, 'min');

      // console.log(arr,'after')



    } while ( arr.length > 1)

  return arr.length === 0 ? newArr:newArr.concat(arr[0])

}
