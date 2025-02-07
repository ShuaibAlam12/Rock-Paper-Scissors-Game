let btnRock=document.querySelector(".rock");
let btnPaper=document.querySelector(".paper");
let btnScissor=document.querySelector(".scissors");
let resultContainer=document.querySelector(".result");
let yourScore=document.querySelector(".yourScore");
let compScore=document.querySelector(".compScore");

let comScore=0;
let userScore=0;
function compRandom(){
   let choices=["rock","paper","scissors"];
   return choices[Math.floor(Math.random()*3)];
}

function comparison(user,rev){

    let computer=compRandom();
    
    if(user===computer){
       rev.innerHTML=`It's Tie`;
    }
    else if(user==="scissors" && computer==="paper" || 
        user==="paper" && computer==="rock" ||
        user==="rock" && computer==="scissors"
    ){
        userScore++;
        yourScore.innerHTML=userScore;
        rev.innerHTML=`you Win! ${user} beats ${computer}`;
    }
    else{
        comScore++;
        compScore.innerHTML=comScore;
        rev.innerHTML=`You Lose! ${computer} beats ${user}`;
    }
   resultContainer.innerHTML="";
   resultContainer.appendChild(rev);
        
}

btnRock.addEventListener("click",()=>{
    let rev=document.createElement("h2");
    
    comparison("rock",rev);
})

btnPaper.addEventListener("click",()=>{
    let rev=document.createElement("h2");
    comparison("paper",rev);
})
btnScissor.addEventListener("click",()=>{
    let rev=document.createElement("h2");
    comparison("scissors",rev);
})