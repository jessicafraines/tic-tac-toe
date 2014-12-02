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

function changePlayer(){
  if (game.turn === true) {
    player.player1.turn = false;
    player.player2.turn = true;
  } else {
    return player2;
    game.turn = true;
  }
}

function makeMove(){
  changePlayer();
}
