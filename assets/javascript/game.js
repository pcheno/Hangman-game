    // Creates an array that lists out all of the options a-z.
    var computerChoices = ["the faces", "al stewart", "todd rundgren"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guess = "";
    var guessStr = "";
    var guessLeft = 12;
    var trii = -1; //negative identifies first time through
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
        var guessed = guessStr.includes(guess);
        //if we have not guessed the letter before...keep on going.
        if (guessed == false) {
          // add guess to guessStr
          if (guessStr == "") {
            guessStr = " " + guess;
          } else {
            guessStr = guessStr + "," + guess;
          }

          //is letter contained in the word?
          var found = computerGuess.includes(guess);
          if (found == true) {
            // now add letter to guessStr, loop through computerguess by letter checking for the letter in guessStr
            //while looping through recreate disStr. When disStr equals computerguess thats a win

            disStr = computerGuess;
            for (var i = 0; i < computerGuess.length; i++) {
             console.log("before after loop:"+computerGuess[i])
              if (guessStr.includes(computerGuess[i]) == false) {
                //letter of computerguess is NOTin the list of guessed letters. hide it "-"
                disStr = disStr.replace(computerGuess[i], "-");
              

              }else {}

              //if (computerGuess[i] !== " ") {
              //  disStr = disStr.replace(computerGuess[i], "-");
              //}
              //String.substr(0, index) + replacement + String.substr(index + replacement.length);

            }

          } else { //(found == true) guess is in the word the else is not in the word

            trii++;
            guessLeft--;

          } // guess is not in word
          if (guess === computerGuess) {
            wins++;
            winFlag = true;
            //and start the game over.
            trii = 12;
          }



        } //(guessed == false) new letter pressed
      } // (trii !== -1)
      //Was it the 12th try.If so, reset varibles, and check for a loss

      if (trii > 11) {
        guessLeft = 12;
        guessStr = "";
        trii = 0;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        disStr = computerGuess;
        for (var i = 0; i < computerGuess.length; i++) {
          if (computerGuess[i] !== " ") {
            disStr = disStr.replace(computerGuess[i], "-");
          }
        }
        if (winFlag == false) {
          losses++
        } else {
          winFlag = false;
        }
      } else {
        if (trii < 0) {
          //first time the game is just starting.
          trii = 0;
          for (var i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] !== " ") {
              disStr = disStr.replace(computerGuess[i], "-");
            }
          }
        }
      }


      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses,
      // and wins/losses/guesses left/string of guesses.
      var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Guessed Letters: " + guessStr + "</p>" +
        "<p>Current word: " + disStr + "</p>";

      // Set the inner HTML contents of the #game div to our html string
      document.querySelector("#game").innerHTML = html;
    }