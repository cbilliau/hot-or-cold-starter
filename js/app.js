
$(document).ready(function(){
'use strict'
// Variables
	var randomNum = "";
	var userNum = "";
	var evalNum = "";

	/*--- Display information modal box ---*/
  	$(".what").click(function(event){
    	event.preventDefault();
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){

  		$(".overlay").fadeOut(1000);
  	});

//Start game on load
	newGame();
// Start a new game
	$('.new').on('click', function() {
		newGame();
	});
// newGame function
	function newGame() {
		genNum();
		console.log(genNum());
	}
// Random number generator
	function genNum() {
		randomNum =  Math.floor((Math.random() *100)+1);
		return randomNum;
	}
// Take user input and evaluate
	function userInput() {
		$('.game').on('click', '#guessButton', function(event) {
		event.preventDefault();
		// get value input
		var userNum = $('#userGuess').val();
		// evaluate value (far,close, correct?)
		// return feedback (cold, hot, correct?)
		evalNum = evaluate(userNum, randomNum);
		if (evalNum <= 20) {
			$('#feedback').append('<h2>You\'re hot</h2>')
		} else if (evalNum > 20) {
			$('#feedback').append('<h2>You\'re cold</h2>')
		}	else {
			$('#feedback').append('<h2>Correct!</h2>')
		}
	}
)}

// Function to evaluate number
	function evalNum(num1, num2) {
		if (num1 > num2) {
			return num1-num2;
		} else {
			return num2-num1;
			}
	}

});
