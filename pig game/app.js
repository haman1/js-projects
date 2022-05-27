'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initial conditions
score0El.textContent= 0;
score1El.textContent= 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//Roll dice functionality
btnRoll.addEventListener('click', function(){
    //generate random roll
    const dice = Math.trunc(Math.random() * 6) +1;

    //Display Dice 
    diceEl.classList.remove('hidden');
    diceEl.src =  `img/dice-${dice}.png`;

    //check for rolled1: if true, switch player 
    if(dice !== 1) {
        //add to current score
        currentScore += dice;
        current0El.textContent = currentScore;
    } else {

    }
})