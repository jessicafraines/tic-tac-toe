;(function(){
  'use strict';

  var fb = new Firebase('https://tic-tac-toe-jr.firebaseio.com/');
    $('#messageInput').keypress(function (e) {
      if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        fb.push({name: name, text: text});
        $('#messageInput').val('');
      }
    });
    fb.on('child_added', function(snapshot) {
      var message = snapshot.val();
      displayChatMessage(message.name, message.text);
    });
    function displayChatMessage(name, text) {
      $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messages'));
      $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
      };

})();

;(function(){
  'use strict';
  function go() {
  var userId = prompt('Username?', 'Guest');
  var gameRef = new Firebase(GAME_LOCATION);
  assignPlayerNumberAndPlayGame(userId, gameRef);
};

  var NUM_PLAYERS = 2;

  var GAME_LOCATION = 'https://tic-tac-toe-jr.firebaseio.com/';

  var PLAYERS_LOCATION = 'player_list';

  var PLAYER_DATA_LOCATION = 'player_data';

  var PLAYER_TURN_LOCATION = 'player_turn';

function playGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
  var playerDataRef = gameRef.child(PLAYER_DATA_LOCATION).child(myPlayerNumber);
  var turnCounterLocation = gameRef.child(PLAYER_TURN_LOCATION);
  alert('You are player number ' + myPlayerNumber + 
      '.  Your data will be located at ' + playerDataRef.toString());

  if (justJoinedGame) {
    alert('Doing first-time initialization of data.');
    playerDataRef.set({userId: userId, state: 'game state'});
  }
}

// Use transaction() to assign a player number, then call playGame().
function assignPlayerNumberAndPlayGame(userId, gameRef) {
  var playerListRef = gameRef.child(PLAYERS_LOCATION);
  var myPlayerNumber, alreadyInGame = false;

  playerListRef.transaction(function(playerList) {
    if (playerList === null) {
      playerList = [];
    }

    for (var i = 0; i < playerList.length; i++) {
      if (playerList[i] === userId) {
        // Already seated so abort transaction to not unnecessarily update playerList.
        alreadyInGame = true;
        myPlayerNumber = i; // Tell completion callback which seat we have.
        return;
      }
    }

    if (i < NUM_PLAYERS) {
      playerList[i] = userId;  // Reserve our seat.
      myPlayerNumber = i; // Tell completion callback which seat we reserved.
      return playerList;
    }

    myPlayerNumber = null;
  }, function (error, committed) {
    if (committed || alreadyInGame) {
      playGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
    } else {
      alert('Game is full.  Can\'t join. :-(');
    }
  });
}
})();
