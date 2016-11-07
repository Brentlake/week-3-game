 var options = ["a" "b" "c" "d" "e" "f"];

      var userScore = 0;
      var computerScore = 0;



      document.onkeyup = function(event) {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      alert(userGuess);
      var computerGuess = options[Math.floor(Math.random() * options.length)];
      alert(computerGuess);




      alert("User score = " + userScore + "computer score= " + computerScore);
      }

      };