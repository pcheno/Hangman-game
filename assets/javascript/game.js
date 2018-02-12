    // Creates an array that lists out all of the options a-z.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
      "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guess = "";
    var guessStr = "";
    var guessLeft = 9;
    var trii = 0;
    var winFlag = false;

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

      // Determines which key was pressed.
      var guess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // If we choose the same thing as the computer, modify varibles
      if (guess === computerGuess) {
        wins++;
        winFlag = true;
        //and start the game over.
        trii=9;
      }
      if (guessStr == "") {
        guessStr = guess;

      } else {
        guessStr = guessStr + "," + guess;
      }
      trii++;
      guessLeft--;

      //Was it the 9th try.If so, reset varibles, and check for a loss
      if (trii > 8) {
        guessLeft = 9;
        guessStr = "";
        trii = 0;
        if (winFlag == false) {
          losses++
        } else {
          winFlag = false;
        }
      }


      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses,
      // and wins/losses/guesses left/string of guesses.
      var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Your guesses so far: " + guessStr + "</p>";

      // Set the inner HTML contents of the #game div to our html string
      document.querySelector("#game").innerHTML = html;

    }