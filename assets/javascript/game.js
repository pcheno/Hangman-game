    // Creates an array that lists out all of the options a-z.
    var computerChoices = ["the faces", "al stewart", "todd rundgren"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guess = "";
    var guessStr = "";
    var guessLeft = 12;
    var trii = -1;
    var winFlag = false;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var disStr = computerGuess;

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

      // Determines which key was pressed.
      var guess = event.key;


      //check to see if we are just starting or have been playing
      if (trii !== -1) {
        // If we choose the same thing as the computer, modify varibles
        var Guessed = guessStr.includes(guess);
        
        if (guess === computerGuess) {
          wins++;
          winFlag = true;
          //and start the game over.
          trii = 9;
        }
        if (guessStr == "") {
          guessStr = guess;

        } else {
          guessStr = guessStr + "," + guess;
        }
        trii++;
        guessLeft--;

        //Was it the 9th try.If so, reset varibles, and check for a loss
        if (trii > 11) {
          guessLeft = 12;
          guessStr = "";
          trii = 0;
          if (winFlag == false) {
            losses++
          } else {
            winFlag = false;
          }
        }
      }else {
        //first time the game is just starting.
        console.log("in the first time");
        trii=0;
        console.log("disStr:"+disStr);
        console.log("computerguess:"+ computerGuess);
        for (var i = 0;i<computerGuess.length;i++){
          
          if (computerGuess[i]!==" ") {
           console.log(computerGuess[i]);
           disStr = disStr.replace(computerGuess[i],"-");
          }
          
        
        }
        console.log("disStr= "+disStr);
      }


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses,
        // and wins/losses/guesses left/string of guesses.
        var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>" +
          "<p>Guessed Letters: " +guessStr +"</p>" +
          "<p>Current word: " + disStr + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

    }