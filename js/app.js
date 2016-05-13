
$(document).ready(function(){
'use strict'

// Variables
	var randomNum = "";
	var userNum = "";
	var evalNum = "";
	var counter = "0";

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

// Start new game w/ call function
	$('.new').click( function() {
		newGame();
	})

// newGame function
	function newGame() {
		genNum();
		userInput();
		fieldReset();
		counter = "0";
	}

// Random number generator
	function genNum() {
		randomNum =  Math.floor((Math.random() *100)+1);
		console.log(randomNum);
		return randomNum;
	}

// Take user input and evaluate
	function userInput() {
		$('input#guessButton').click(function(event) {
		event.preventDefault();
		var userNum = $('#userGuess').val(); // get value input
		$('#userGuess').val('');
		userNum = Math.abs(Math.floor(userNum)); // Convert to abs integer.
		evalNum = evaluate(userNum, randomNum); // evaluate value
		if ( isNaN(userNum) || (userNum >=101) || (userNum == '')) { /*eval if NaN or > 100*/
			$('#feedback').html('Try again.')
		} else if ((evalNum <= 20) && (userNum != randomNum)) {
			$('#feedback').html('You\'re hot')
			addGuess(userNum); // Send guess # to guess list
			counterAdd(); // call counterAdd func to increase counter
		} else if (evalNum > 20) {
			$('#feedback').html('You\'re cold')
			addGuess(userNum); // Send guess # to guess list
			counterAdd(); // call counterAdd func to increase counter
		}	else {
			$('#feedback').html('Correct!')
			addGuess(userNum); // Send guess # to guess list
			counterAdd(); // call counterAdd func to increase counter
			// winBox(); // -in progress- call to box to restart game
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

// Function to track # of guesses user makes
	function counterAdd() {
		counter++; // When guess submitted add '1' to number in  span#count
		$('span#count').replaceWith('<span id="count">'+counter+'</span>');
	}

// Guess list creator
	function addGuess(guessNum) {
		$('.game ul').append('<li>' + guessNum + '</li>');
	}

// Winner modal
	// function winBox() {
	// 	var r = confirm ("Winner. Play again?")
	// 	if (r == true) {
	// 		newGame();
	// 	} else userInput();
	// }
// Function to reset game section
	function fieldReset() {
		$('span#count').replaceWith('<span id="count">0</span>'); // Reset counter
		$('h2#feedback').replaceWith('<h2 id="feedback">Make your Guess!</h2>');
		$('.game li').remove(); //Reset feedback
	}
});
