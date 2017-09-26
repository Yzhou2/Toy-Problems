function validSolution(board){



  var column = [];
  var square = [];

  for (var i = 0; i < 9; i++) {
    column[i] = [];

    for (var y = 0; y < 9; y++) {
      column[i].push(board[y][i])
      var idx = Math.floor(i/3) * 3 + Math.floor(y/3)
      square[idx] = square[idx] || []
      square[idx].push(board[i][y])
    }
  }
// console.log(square)
// console.log(column)


function validation(val){
  var newColumn = val.map(arr=>arr.sort(function(a,b){return a - b}).join(''))
  console.log(newColumn)
  return newColumn.every(function(val){
    return val == '123456789'})
  }

  return validation(square)&&validation(column)&&validation(board)?true:false

}


                  validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                                [3, 4, 5, 2, 8, 6, 1, 7, 9]])
