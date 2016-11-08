 var options = ["a","b", "c", "d"];

      var userScore = 0;
      var computerScore = 0;

      var wins = 0;
      var losses = 0;
      var lives = 5;
      

      var showWins = document.getElementById("myWins");
      var showLosses = document.getElementById("myLosses");
      var showLives = document.getElementById("myLives");
      var showLeft = document.getElementById("guessLeft");



      document.onkeyup = function(event) {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      alert(userGuess);
      var computerGuess = options[Math.floor(Math.random() * options.length)];
      alert(computerGuess);

       
        if (computerGuess === userGuess) {
          console.log('losses ' + ++losses);

        }
        else if (computerGuess != userGuess) {
          console.log('wins ' + ++wins);
        }
        if (userGuess === computerGuess){
          console.log('lives ' + --lives);
        }
      }



      

    