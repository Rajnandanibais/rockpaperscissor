const choices=['paper','scissor','rock'];
const button=document.querySelectorAll('.btn-img');
const scoreEl=document.getElementById('score');
const main=document.getElementById('main');
const selectionEl=document.getElementById('selection');
const reset=document.getElementById('reset');
const userSelect=document.getElementById('userSelect');
const computerSelect=document.getElementById('computerselect');
const winner=document.getElementById('winner');

//console.log(pickRandomChoice());
let score=0;
let userchoice=undefined;
//function for userchoice
button.forEach((button) => {
button.addEventListener('click', function() {
 userchoice=button.getAttribute('data-choice');
 console.log(userchoice);

 checkWinner();

});
});
function checkWinner(){
let computerchoice=pickRandomChoice();


updateSelection(userSelect,userchoice);
updateSelection(computerSelect,computerchoice);

if(userchoice===computerchoice){
    winner.innerText='draw';
    
}else if((userchoice==='paper' && computerchoice==='rock') ||
(userchoice==='rock'&&computerchoice==='scissor') ||
(userchoice==='scissoe'&&computerchoice==='paper')){
    //userwin
    updateScore(1);
    winner.innerText='win';
}else{
    //computerwin
    updateScore(-1);
    winner.innerText='lost'
}

}

function updateScore(value){
    score+=value;
    scoreEl.innerText=score;
}


function pickRandomChoice() {
    return choices[Math.trunc(Math.random()*choices.length)]
    ;
}

function updateSelection(selectionEl,choice){
selectionEl.classList.remove('btn-paper');
selectionEl.classList.remove('btn-rock');
selectionEl.classList.remove('btn-scissor');

selectionEl.classList.add(`btn-${choice}`);
selectionEl.querySelector('img').src=`img\icon-${choice}.svg`
}