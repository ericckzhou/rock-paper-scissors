var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choice_msg_p = document.getElementById("choice-msg");
const smallUser = "user".fontsize(3).sup();
const smallComp = "comp".fontsize(3).sup();
//cashing the DOM
//cashing - storing something for future use.
function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = choices[randomNum];
    return compChoice;
}
function convertToRPS (choice){
    if (choice == 'r'){
        return "Rock";
    }
    else if (choice == 'p'){
        return "Paper";
    }
    else {
        return "Scissors";
    }

}
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = smallUser + convertToRPS(userChoice) + "  beats  " + smallComp +  convertToRPS(compChoice) + ". You Win!";
}
function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = smallUser + convertToRPS(userChoice) + "  loses to " + smallComp +  convertToRPS(compChoice) + ". You Lose!";
}
function draw(userChoice, compChoice){
    result_div.innerHTML =  smallUser + convertToRPS(userChoice) + "  tied  " + smallComp + convertToRPS(compChoice) +". You Draw!";
}
function game(userChoice){
    // p -> r -> s
    // p < r < s
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();