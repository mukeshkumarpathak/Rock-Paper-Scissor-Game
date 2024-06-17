

let choices=document.querySelectorAll(".choice");

let message=document.querySelector("#message");

let userScore=document.querySelector("#user-score");
let computerScore=document.querySelector("#Computer-score");




let genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3)
    return(options[index]);

}

let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore.innerText++;

        console.log("You won");
        message.innerText=`You won!   your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
        computerScore.innerText++;
        console.log("Computer won");
        message.innerText=`Computer won!  ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
    }
}


let playGame=(userChoice)=>{
    console.log("user's chioce is ",userChoice);
    let compChoice=genCompChoice();
    console.log("computer's choice ",compChoice);

    if(userChoice==compChoice){
        console.log("Tie");
        message.innerText=`Tie!  your ${userChoice} is same to ${compChoice}`;
        message.style.backgroundColor="blue";
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=(compChoice=="paper")?false:true;
        }
        else if(userChoice=="paper"){
            userWin=(compChoice=="rock")?true:false;
        }    
        else{
            userWin=(compChoice=="rock")?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((x)=>{
    x.addEventListener('click',()=>{
        let userChoice=x.getAttribute("id");
        playGame(userChoice);
    })
})



