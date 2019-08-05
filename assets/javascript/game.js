// <VARIABLES>

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


// </VARIABLES>





function verify() {

    //reset function to regenerate values for the gems and set total score to 0
    function reset() {
        rubyValue = (Math.floor(Math.random() * 11 + 1));
        diamondValue = (Math.floor(Math.random() * 11 + 1));
        emeraldValue = (Math.floor(Math.random() * 11 + 1));
        amethystValue = (Math.floor(Math.random() * 11 + 1));
        currentGoal = (Math.floor(Math.random() * 101 + 19));
        $("#current-goal").html(currentGoal);
        totalScore = 0;
        $("#total-score").html(totalScore);
    }

    if (currentGoal === totalScore) {
        reset();
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#winorlose").html("You Won!")
    }

    if (totalScore > currentGoal) {
        reset();
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#winorlose").html("You Lost!");

    }
}


$("#current-goal").html(currentGoal);

$("#ruby").on("click", function () {
    totalScore += rubyValue;
    $("#total-score").html(totalScore)
    verify();
})

$("#amethyst").on("click", function () {
    totalScore += amethystValue;
    $("#total-score").html(totalScore)
    verify();
})

$("#emerald").on("click", function () {
    totalScore += emeraldValue;
    $("#total-score").html(totalScore)
    verify();
})

$("#diamond").on("click", function () {
    totalScore += diamondValue;
    $("#total-score").html(totalScore)
    verify();
})


$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);






