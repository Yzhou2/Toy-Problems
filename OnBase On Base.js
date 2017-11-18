// Write a function that will output the numbers from one to one-hundred. However,
// for numbers evenly divisible by three print “On” instead and numbers evenly divisible by seven print “Base”.
// For those numbers that are evenly divisible by both three and seven print “OnBase”.

function outputNum () {
  //output num from 1 to 100
  var numArr = [];
  for (var i = 1 ; i <= 100; i++) {
    if( i % 3 === 0 && i % 7 !== 0) {
      // console.log(i, '%3')
      numArr.push("On")
    } else if ( i % 7 === 0 && i % 3 !== 0) {
      // console.log(i, '%7')
       numArr.push("Base")
    } else if (i % 7 === 0 && i % 3 === 0 ) {
      // console.log(i,'%7 && %3')
       numArr.push("OnBase") 
    } else {
    numArr.push(i);
    }
  }
  return numArr
}

outputNum()
