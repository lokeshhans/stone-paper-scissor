let userScor = 0;
let compScor = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");




const getCompChoice = () => {
    //rock, paper and scssor;
    const options = ["rock", "paper","scissor"];
    const randomIndex = Math.floor(Math.random()  * 3) ; 
    return options[randomIndex] ;
}
 const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw";
    document.querySelector("#msg").style.backgroundColor = "black";
 }

ShowWinner  = (userWin) => {
    if(userWin ){
        console.log("You win!");
        msg.innerText = "You Win!";
        document.querySelector("#msg").style.backgroundColor = "green";
        userScor = userScor + 1;
        userScore.innerText = (userScor);
        


    }else {
        console.log("You lose");    
        msg.innerText = "You lose";
        document.querySelector("#msg").style.backgroundColor = "red";
        compScor = compScor + 1;
        compScore.innerText = (compScor);


    }
}
const playGame = (userChoice) => {
    console.log("The user coice is =", userChoice);
    // the game choice is rendom by below code --- > modular....
    const compChoice = getCompChoice();
    console.log("The computer coice is =", compChoice);


    if(userChoice === compChoice){
        drawGame ();
    } else {
        let userWin = true;
        if  (userChoice ==="rock") {
            //scissor , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock , scissor
            userWin = compChoice === "scissor" ?false :true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        ShowWinner(userWin);
    }
}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})

