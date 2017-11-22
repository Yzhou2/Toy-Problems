// Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...
//
// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"
//
// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.

var bot = {
  message: function(msg) {
     var newMsg = msg.split(' ')
     if (newMsg[0] === 'Add'){
       return Number(newMsg[1]) + Number(newMsg[3]);
     } else if (newMsg[0] === 'Subtract')  {
       return Number(newMsg[3]) - Number(newMsg[1]);
     } else {
      if (newMsg[5].substr(4,2) === 'pm') {
        if (newMsg[5].substr(0,1) < 6) {
          return 'sunny'

        } else if (newMsg[5].substr(0,1) == 6 && newMsg[5].substr(2,1) == 0 ) {
          return 'sunny'
        }  else {
          return 'raining'
        }
      } else {
        if (newMsg[5].substr(0,1) > 6) {
          return 'sunny'
        } else if (newMsg[5].substr(0,1) == 6 && newMsg[5].substr(2,1) == 0) {
          return 'sunny'
        } else {
          return 'raining'
        }
      }

     }

  }
};
