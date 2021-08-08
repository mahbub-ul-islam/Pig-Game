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
