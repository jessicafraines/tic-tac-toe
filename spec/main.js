var player = {
  player1: {
    name: "Dakota",
    turn: true,
    show: true,
  },
  player2: {
    name: "Brian",
    turn: false,
    show: false,
  }
}

var game = {
  turn: true
}
function playerTurn(){
  if (game.turn === true) {
    return game.turn = false;
  } else if (game.turn === false) {
    return game.turn = true;
  }
}

$('td').click(function(){
  if(game.turn === true && !$(this).hasClass('o') && !$(this).hasClass('x')) {
    $(this).addClass('x');
  } else if (game.turn === false && !$(this).hasClass('o') && !$(this).hasClass('x')) {
    $(this).addClass('o');
  }
  updateBoardArray();
  //firebase function
  updateDisplay(board);
  checkForWin();
});

var board = [['', '', ''], ['', '', ''], ['', '', '']];

function updateDisplay (newBoard){
  $('#board tr').each(function(i, row){   //first part says all rows on the board
    $(row).find('td').each(function(j, cell){
      var text = newBoard[i][j];
      $(cell).addClass(text);
    });
  });
}

function updateBoardArray (){
  var newArray = [];
  $('#board tr').each(function(i, row){ //first part says all rows on the board
    var newRow = [];
    $(row).find('td').each(function(j, cell){
      if($(cell).hasClass('x')) {
        var cellStatus = 'x';
      }else if($(cell).hasClass('o')){
        var cellStatus = 'o';
      }else{
        var cellStatus = '';
      }
      newRow.push(cellStatus);
    });
    newArray.push(newRow);
  });
  board = newArray;
}

function checkForWin (){
  for(var i = 0; i < board.length; i++){
    // vertical check
    if(board[0][i] != '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]){
      console.log("CONGRATULATIONS! YOU WIN");
    // horizontal check
      console.log("CONGRATULATIONS! YOU WIN");
    }else if(board[i][0] != '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]){
      console.log("CONGRATULATIONS! YOU WIN");
    // diagonal top left
    }else if(board[0][0] !='' && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
      console.log("CONGRATULATIONS! YOU WIN");
    // diagonal top right
    }else if(board[0][2] !='' && board[0][2] === board[1][1] && board[0][2] === board[2][0]){
      console.log("CONGRATULATIONS! YOU WIN");
    }else{
      playerTurn();
    }
  }
}



