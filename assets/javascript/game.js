var wins = 0;
var losses = 0;
var totalScore = 0;




//values for each of the gems is randomly generated
var rubyValue = (Math.floor(Math.random() * 12));
var diamondValue = (Math.floor(Math.random() * 12));
var emeraldValue = (Math.floor(Math.random() * 12));
var amethystValue = (Math.floor(Math.random() * 12));   


//goal for each game is randomly generated with a max being at 120. needs to have a floor of 19
 var currentGoal = (Math.floor(Math.random() * 120));

//reset function to regenerate values for the gems and set total score to 0
function reset(){
    rubyValue = (Math.floor(Math.random() * 12));
    diamondValue = (Math.floor(Math.random() * 12));
    emeraldValue = (Math.floor(Math.random() * 12));
    amethystValue = (Math.floor(Math.random() * 12));
    currentGoal = (Math.floor(Math.random() * 120));
    totalScore = 0;   
}

function currentGoalFloor(){
    //ensures that the game's target score is more than 19.
    
}
console.log(currentGoal)

    if(currentGoal < 19){
    currentGoal + 19;
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

    if(currentGoal === totalScore){
        reset();
        wins++;
    }
    if(totalScore > currentGoal){
        reset();
        losses++;
    }
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);






