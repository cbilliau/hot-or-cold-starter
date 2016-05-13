
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

//Begin game on load
	newGame();
// Start a new game
	$('.new').click( function() {
		newGame();
		console.log('start new game button clicked');
	});
// newGame function
	function newGame() {
		genNum();
		userInput();
		console.log(randomNum + ' random # generated');
	}
// Random number generator
	function genNum() {
		randomNum =  Math.floor((Math.random() *100)+1);
		return randomNum;
	}
// Take user input and evaluate
	function userInput() {
		$('input#guessButton').click(function(event) {
		event.preventDefault();
		console.log('user input clicked')
		// get value input
		var userNum = $('#userGuess').val();
		$('#userGuess').val('');
		// evaluate value (far,close, correct?)
		// return feedback (cold, hot, correct?)
		userNum = Math.abs(Math.floor(userNum));
		evalNum = evaluate(userNum, randomNum);
		console.log('difference btwn #s: ' + evalNum);
		if ((evalNum <= 20) && (userNum != randomNum)) {
			$('#feedback').html('You\'re hot')
		} else if (evalNum > 20) {
			$('#feedback').html('You\'re cold')
		}	else {
			$('#feedback').html('Correct!')
		}
	}
)}
// Function to evaluate distance btwn numbers
	function evaluate(num1, num2) {
		if (num1 > num2) {
			return num1-num2;
		} else {
			return num2-num1;
			}
	}

});
