let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was a draw");
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();
    console.log("Computer choice is " + compChoice);

    if (userChoice === compChoice) {
        drawGame();
        msg.innerText="Game is draw";
        msg.style.backgroundColor = "black";
    }
    else {
        let userWin = true;

        if (userChoice === "rock") {
            // compchoice = paper or scissor
            userWin = (compChoice === "paper" ? false : true);
        }
        else if (userChoice === "paper") {
            //compchoice = rock or scissor
            userWin = (compChoice === "rock" ? true : false);
        }
        else {
            // userChoice = scissor
            //compchoice = rock or paper
            userWin = (compChoice === "rock" ? false : true);
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Your choice is " + userChoice);
        playGame(userChoice);

    })
})