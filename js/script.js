"use strict";

// selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const msg0El = document.querySelector(".wining-msg--0");
const msg1El = document.querySelector(".wining-msg--1");

const btnDice = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// global variables
let player, currentScore, totalScore;

// initial position
const startPosition = function () {
    // reset values
    player = 0;
    currentScore = 0;
    totalScore = [0, 0];

    // reset html dom
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    diceEl.classList.add("hidden");
    msg0El.classList.add("hidden");
    msg1El.classList.add("hidden");

    player0El.classList.add("player--active");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--active");
    player1El.classList.remove("player--winner");

    // reset buttons
    document.querySelector(".btn--roll").disabled = false;
    document.querySelector(".btn--hold").disabled = false;
};

// dice generator
const diceRoll = function () {
    // generate value for dice
    const diceGenerator = Math.trunc(Math.random() * 6) + 1;

    // show dice
    diceEl.src = `img/dice-${diceGenerator}.png`;
    diceEl.classList.remove("hidden");

    // return dice value
    return diceGenerator;
};

// current score
const currentScoreBoard = function () {
    // show current scoreboard
    const currentPlayerScoreEL = document.getElementById(`current--${player}`);
    currentPlayerScoreEL.textContent = currentScore;
};

// total score
const finalScoreBoard = function () {
    // show total scoreboard
    totalScore[player] += currentScore;
    const currentPlayerTotalScore = document.getElementById(`score--${player}`);
    currentPlayerTotalScore.textContent = totalScore[player];
};

// swap player
const swapPlayer = function () {
    // reset current score
    currentScore = 0;
    currentScoreBoard();

    // getting the current player and remove active state
    let currentPlayer = document.querySelector(`.player--${player}`);
    currentPlayer.classList.remove("player--active");

    // changing the current Player and add active state
    player = player === 0 ? 1 : 0;
    currentPlayer = document.querySelector(`.player--${player}`);
    currentPlayer.classList.add("player--active");
};

// check for winner
const winnerCheck = function () {
    // check for winner
    if (totalScore[player] >= 100) {
        // setting winner background
        diceEl.classList.add("hidden");
        const playerWinner = document.querySelector(`.player--${player}`);
        playerWinner.classList.remove("player--active");
        playerWinner.classList.add("player--winner");

        // playerWinner.textContent += "Wins the game.";
        const winingMsg = document.querySelector(`.wining-msg--${player}`);
        winingMsg.classList.remove("hidden");

        // btn disable
        document.querySelector(".btn--roll").disabled = true;
        document.querySelector(".btn--hold").disabled = true;

        return true;
    } else {
        return false;
    }
};

// buttons
// roll dice button
btnDice.addEventListener("click", function () {
    const diceScore = diceRoll();

    // check if dice is not 1
    if (diceScore !== 1) {
        currentScore += diceScore;
        currentScoreBoard();
    } else {
        // currentScore = 0;
        swapPlayer();
    }
});

// hold button
btnHold.addEventListener("click", function () {
    finalScoreBoard();

    // if there is no winner
    if (!winnerCheck()) {
        swapPlayer();
    }
});

// new game button
btnNew.addEventListener("click", function () {
    startPosition();
});

// initialize the game at first
startPosition();
