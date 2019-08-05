var wins = 0;
var losses = 0;
var totalScore = 0;




//values for each of the gems is randomly generated
var rubyValue = (Math.floor(Math.random() * 11 + 1));
var diamondValue = (Math.floor(Math.random() * 11 + 1));
var emeraldValue = (Math.floor(Math.random() * 11 + 1));
var amethystValue = (Math.floor(Math.random() * 11 + 1));   


//goal for each game is randomly generated with a max being at 120. needs to have a floor of 19
 var currentGoal = (Math.floor(Math.random() * 101 + 19));

//reset function to regenerate values for the gems and set total score to 0
function reset(){
    rubyValue = (Math.floor(Math.random() * 11 + 1));
    diamondValue = (Math.floor(Math.random() * 11 + 1));
    emeraldValue = (Math.floor(Math.random() * 11 + 1));
    amethystValue = (Math.floor(Math.random() * 11 + 1));
    currentGoal = (Math.floor(Math.random() * 101 + 19));
    totalScore = 0;   
}


    $("#current-goal").html(currentGoal);

    $("#ruby").on("click", function(){
        totalScore += rubyValue;
        $("#total-score").html(totalScore) 
      })

    $("#amethyst").on("click", function(){
        totalScore += amethystValue;
        $("#total-score").html(totalScore)
    }) 

    $("#emerald").on("click", function(){
        totalScore += emeraldValue;
        $("#total-score").html(totalScore)
    })

    $("#diamond").on("click", function(){
        totalScore += diamondValue;
        $("#total-score").html(totalScore)
    })

    console.log(currentGoal)
    console.log(totalScore)

    if(currentGoal === totalScore){
        reset();
        wins++;
        $("#winorlose").html("You Won!")
    }

    if(totalScore > currentGoal){
        reset();
        losses++;
        $("#winorlose").html("You Lost!")
    }

    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);






