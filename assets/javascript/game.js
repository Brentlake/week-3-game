 var options = ["1","2", "3", "4"];
    
      var userScore = 0;
      var computerScore = 0;

      var wins = 0;
      var losses = 0;
      var lives = 5;
      

      
       document.onkeyup = function(event) {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      alert(userGuess);
      var computerGuess = options[Math.floor(Math.random() * options.length)];
      alert(computerGuess);

       
        if (computerGuess === userGuess) {
          console.log('losses ' + ++losses);
          document.getElementById("myLosses").innerHTML = +losses;

        }
        else if (computerGuess != userGuess) {
          console.log('wins ' + ++wins);
          document.getElementById("myWins").innerHTML = +wins;
        }
        if (userGuess === computerGuess){
          console.log('lives ' + --lives);
          document.getElementById("myLives").innerHTML = lives;
    
      }
    }



      

    