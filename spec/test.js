;(function (){
  "use strict";

  describe("set player turn", function(){
    describe("At beginning of game player 1 should move first", function(){
      it("should set player 1 turn to true", function(){
        assert.equal(player.player1.turn, true)
      });
    });
    describe("At beginning of game player 2 should not be able to move", function(){
      it("should set player 2 turn to false", function(){
        assert.equal(player.player2.turn, false)
      });
    });
    describe("After player 1 moves, player 1 turn should equal false", function(){
      it("should set player 1 turn to false", function(){
        game.turn = true;
        assert.equal(changePlayer(), false)
      });
    });

  }); //closing set player turn

  

})(); //closing iife
