//set up the buttonss
$(function(){

    $("#reset").click(function(){
        resetBoard();
        $("#scoreHist *").remove();
    });

    $("#roll").click(function(){
        rollDice();
    });

    $("#bank").click(function(){
        saveScore();
    });
});

//All of the variables used in the functions
var select = document.getElementById('numDice'),
value = 0,
scoreTurn = 0,
strike = 0,
gameOver = "",
numRolls = 0,
totalScore = 0,
totalRolls = 0,
success = 0,
fail = 0;
avgScore = 0,
avgRolls = 0,
failRate = 0;

//Used by the addDice() function to append each onto the game board
var dice = "<h1 class='col-sm-3' id='die'>0</h1>"

/*depending on the number of dice selected, programatically adds each "dice"
to the borad*/
function addDice () {
    value = select.options[select.selectedIndex].value;
    for (let index = 0; index < value; index++) {
        var id = ""+index;
        $("#game").append(
            dice
        )

        $("#die").attr("id" , id);
    }
}

//Rolls the dice and checks of the game is lost.
function rollDice() {
    gameOver = "Game Over!";

    for (let index = 0; index < value; index++) {
        var id = ""+index;
        var result = Math.ceil(Math.random()*6);

        $("#"+id).text(result);

        scoreTurn += result;

        if (result == 1) {
            strike ++;
            $("#strikes").text("Strikes: "+strike);
        }
    }

    if (loseCheck()) {
        updateView();
        fail ++;
        $("#score").text(gameOver);
    } else {
        $("#score").text(scoreTurn);
    }

    numRolls ++;
}

//Banks the current score and updates the average values.
function saveScore(){
    if (scoreTurn > 0) {
        success ++;

        var scoreTxt = "<h4 class='col-sm-4'>Score: "+scoreTurn+"</h4>";
        var rollsTxt = "<h4 class='col-sm-8'>Number of rolls: "+numRolls+"</h4>";

        $("#scoreHist").append(scoreTxt+rollsTxt);


        totalScore += scoreTurn;
        totalRolls += numRolls;
        avgScore = Math.ceil(totalScore/success);
        avgRolls = Math.ceil(totalRolls/success);

        $("#avgScore").text(avgScore);
        $("#avgRoll").text(avgRolls);


    }

    updateView();
}

//Checks of the round is lost
function loseCheck() {
    if (strike >= value) {
        return true;
    } else {
        return false;
    }
}

/*Completely resets the game board and re-initializes the dice.
This is used when a new game is needed potentially with a different number of dice.*/
function resetBoard () {
    $("#game *").remove()
    addDice();
    $("#score").text(0);
    scoreTurn = 0;
    strike = 0;
    $("#strikes").text("Strikes: "+strike);
    numRolls = 0;

    fail = 0;
    success = 0;
    avgRolls = 0;
    avgScore = 0;
    failRate = 0;
    totalScore = 0;
    totalRolls = 0;

    $("#avgScore").text(0);
    $("#avgRoll").text(0);
    $("#failRate").text(0);
}

/*Used during a game to update just the views needed to continue with the current
values for the averages and other metrics*/
function updateView() {
    $("#score").text(0);
    scoreTurn = 0;
    strike = 0;
    $("#strikes").text("Strikes: "+strike);
    numRolls = 0;

    failRate = fail/success;
    $("#failRate").text(failRate);
}
