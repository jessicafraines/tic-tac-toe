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
    return game.turn = false;
    //player.player2.turn = true;
  } else if (game.turn === false) {
    //player.player2.turn = false;
    return game.turn = true;
  }
}

$("td").click(function(){
  if (game.turn === true && !$(this).hasClass('o') && !$(this).hasClass('x')) {
    console.log(game.turn);
  $(this).addClass('x');
  console.log("NOW", game.turn);
  } else if (game.turn === false && !$(this).hasClass('o') && !$(this).hasClass('x')) {
  $(this).addClass('o');
  console.log("NOWFALSE", game.turn);
  }
  changePlayer();

});




