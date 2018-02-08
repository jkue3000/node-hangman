var LetterRequire = require('./Letter.js');
// var userInput = process.argv[2];

var WordConstructor = function(chosenWord){
	
	this.chosenWord = chosenWord;
	this.newLetter = [];
	this.chosenLetter = false;

	// method to put chosen word into array
	this.letterSplit = function(){
		// for loop to split the word up into an array
		for (i = 0; i< this.chosenWord.length; i++) {
			
			var currentLetter = new LetterRequire(this.chosenWord[i]);
			this.newLetter.push(currentLetter);
		}
		// console.log(this.newLetter);
	};

	// method to check the the letter if its going to be returned true or false
	this.getWord = function() {
		
		if(this.newLetter.every(function(selectLetter){
			return selectLetter.letterBool == true;
			// console.log(selectLetter.letterBool);
		})){
			this.chosenLetter == true;
			return;
		}
	};

	
	// method to check the guess letter against the word letter
	this.checkLetter = function (userGuess) {
		var guesses = 0;
		
        //for each through new letter
        this.newLetter.forEach(function(theLetter) {
            if (theLetter.newLetter === userGuess) {
                theLetter.letterBool = true;
                guesses++;
            }
        })
		return guesses;
	};

	// display the word as an underscore or string
	this.wordShowDisplay = function() {
		var emptyString = '';
		
		this.newLetter.forEach(function(pickedLetter){
			var currLetter = pickedLetter.letterDisplay();
			emptyString += currLetter;
		})
		
		return emptyString;
	};
};


module.exports = WordConstructor;

