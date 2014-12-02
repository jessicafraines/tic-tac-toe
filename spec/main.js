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
  if (player.player1.turn === true) {
    player.player1.turn = false;
    player.player2.turn = true;
  } else if (player.player2.turn === true) {
    player.player2.turn = false;
    player.player1.turn = true;
  }
}

$("td").click(function(){
  $(this).addClass("selected");

});


  changePlayer();

