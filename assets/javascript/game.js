
var wordBank = ["hawks" , "celtics" , "nets" , 
"hornets" , "bulls" , "cavaliers" , "mavericks" ,
 "nuggets" , "pistons" , "warriors" , "rockets" , "pacers" , "clippers" , 
"lakers" , "grizzlies" , "heat" , 
"bucks" , "timberwolves" , "pelicans" , "knicks" , 
"thunder" , "magic" , "suns" , "kings" , "spurs" ,
 "raptors" , "jazz" , "wizards" ];
  var wins = 0;
  var loss = 0;
  
    function newGame(){
    var wrongLetter = [];
    wrongLetter.push();
    document.getElementById("missedLetter").innerHTML = wrongLetter.join(", ");
  var guessLeft = 9;
  var underScores = [];
  var alphabet = /^[a-zA-Z]+$/;
 var gameBoard= document.getElementById("word-blanks");
    
        var  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(randomWord);
      for(var i=0; i < randomWord.length; i++){
          underScores[i] = "_";
          
      }console.log(underScores);
      gameBoard.innerHTML = underScores.join(" ");
      document.getElementById("guesses-left").innerHTML = guessLeft;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("loss").innerHTML = loss;
        
    document.onkeypress = function(event){
     var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
       console.log(letterGuess);
       if(letterGuess.match(alphabet)){
     if(randomWord.indexOf(letterGuess) < 0 & wrongLetter.indexOf(letterGuess)<0){
        wrongLetter.push(letterGuess);
        document.getElementById("missedLetter").innerHTML = wrongLetter.join(", ");
            guessLeft--;
            document.getElementById("guesses-left").innerHTML = guessLeft;
            if(guessLeft===0){
                alert("You Lose! The Word Was: " + randomWord);
               loss++;
                newGame();
               
           }
         
       }   
     
     else{
        for(var j = 0; j<randomWord.length; j++){
            if(randomWord[j] === letterGuess){
             underScores[j] = letterGuess;
             console.log(underScores);
             gameBoard.innerHTML = underScores.join(" ");
                }
                if(underScores.indexOf("_")<0){
                alert("You Win!!! The Word Was: " + randomWord );
                    wins++;
                    newGame();
                    
                }
           }
           
    }
    }
}
}
 newGame() ;
    