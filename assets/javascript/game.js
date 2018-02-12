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
        var guessed = guessStr.includes(guess);
        //if we have not guessed the letter before...keep on going.
        if (guessed == false) {
          //is letter contained in the word?
          var found = computerGuess.includes(guess);
          if (found == true) {
            for (var i = 0; i < computerGuess.length; i++) {
              console.log(computerGuess[i]);
              if (disStr[i] == "-") {
                console.log("disStrI:" + disStr[i])
                if (computerGuess[i] == guess) {
                  console.log("= guess")
                  console.log("disStr.sub:" + disStr.substr(0, i));
                  console.log("2 disStrsub:" + disStr.substr(i + disStr.length));
                  disStr = disStr.substr(0, i) + guess + disStr.substr(i + disStr.length);
                } else {
                  console.log("else")
                  if (computerGuess[i] !== " ") {
                    console.log("2else")
                    disStr = disStr.substr(0, i) + "-" + disStr.substr(i + disStr.length);
                  } else {
                    console.log("3else")
                    disStr = disStr.substr(0, i) + "-" + disStr.substr(i + disStr.length);
                  }
                }
              }
            }
            console.log("disStr: coming out:" + disStr);
          }

          }
          if (guess === computerGuess) {
            wins++;
            winFlag = true;
            //and start the game over.
            trii = 12;
          }

          trii++;
          guessLeft--;

          //Was it the 12th try.If so, reset varibles, and check for a loss
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
        }
      } else {
        //first time the game is just starting.
        trii = 0;
        for (var i = 0; i < computerGuess.length; i++) {
          if (computerGuess[i] !== " ") {
            disStr = disStr.replace(computerGuess[i], "-");
          }


        }
        console.log(computerGuess);
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