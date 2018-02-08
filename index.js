var prompt = require("prompt");
var RequireWord = require('./Word.js');

prompt.start();

	

var hangman = {

	dictionary: ['tarpon', 'snook', 'redfish', 'ladyfish', 'grouper', 'flounder', 'trout'],
	userGuesses: 7,
	randomWord: "",
	alreadyGuess: [],

	startGame: function(word) {
 		this.resetUserGuess();
 		this.randomWord = new RequireWord(this.dictionary[Math.floor(Math.random() * this.dictionary.length)]);
 		// console.log(this.randomWord);
 		this.randomWord.letterSplit();
 		console.log(this.randomWord.newLetter);
 		console.log(this.randomWord.wordShowDisplay());
 		this.promptCall();
 	},

 	resetUserGuess: function(){
 		this.userGuesses = 7;
 	},


	promptCall: function(){
 		var that = this;
 		prompt.get(['guess_a_letter'], function(err, result){
 			console.log("You guessed: " + result.guess_a_letter);
 			
 			for (i=0; i<that.randomWord.newLetter.length; i++){
 				if (result.guess_a_letter === that.randomWord.newLetter[i]){
 					that.randomWord.checkLetter(result.guess_a_letter);
 					return;
 				}

 				// change the letter value boolen to true to be able to run the other functions
 				// display the correct letter by runnung the function un word.js and from word.js to letter.js method
 				// check if letter is not equal to the array of letter form randomWord
 				// reduce the userguess depedning on how many guesses are wrong
 				// rerun the prompt function to keep on getting user input until word is guessed right or user guess is ran out
 				// console log if user won or lost
 				// once if one of the above options are filled, ask to replay game or exit
 				// rerun hangman.startGame function

 			}
 			console.log(that.randomWord.wordShowDisplay());
 			
 			

 		});

 	}
}

hangman.startGame();



