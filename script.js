'use strict';

const choices=['paper','scissor','rock'];
const button=document.querySelectorAll('.pick');
const scoreEl=document.getElementById('score');
const main=document.getElementById('main');
const selection=document.getElementById('selection');
const reset=document.getElementById('reset');
const userSelect=document.getElementById('userSelect');
const computerSelect=document.getElementById('computerSelect');
const userImg=document.querySelector('.user-img');
const computerImg=document.querySelector('.computer-img');
const winner=document.getElementById('winner');

//console.log(pickRandomChoice());
let score=0;
let userchoice=undefined;
let computerchoice=undefined;
//function for userchoice

button.forEach((button) => {
button.addEventListener('click', function() {
 userchoice=button.getAttribute('data-choice');
 //console.log(userchoice);

   checkWinner();
   updateSelection();

});
});

reset.addEventListener('click',()=>{
//show main hide selection
main.style.display='flex';
selection.style.display='none';

})


function checkWinner() {
let computerchoice=pickRandomChoice();


//updateSelection(userSelect,userchoice);
//updateSelection(computerSelect,computerchoice);

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
   //show selection hide main
main.style.display='none';
selection.style.display='flex';


}

function updateScore(value){
    score+=value;
    scoreEl.innerText=score;
}

function pickRandomChoice() {
    const choices=['paper','rock','scissor'];
    return choices[Math.trunc(Math.random()*choices.length)]
    ;
}

function updateSelection(){
userSelect.classList.remove("btn-paper");
userSelect.classList.remove("btn-rock");
userSelect.classList.remove("btn-scissor");
computerSelect.classList.remove("btn-paper");
computerSelect.classList.remove("btn-rock");
computerSelect.classList.remove("btn-scissor");

userSelect.classList.add(`btn-${userchoice}`);
computerSelect.classList.add(`btn-${computerchoice}`);

userImg.src=` img\icon-${userchoice}.svg`;
computerImg.src=`img\icon-${computerchoice}.svg`;
}