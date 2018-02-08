// var to hold letter constructor function
var LetterConstructor = function(value){
	
	this.value = value;
	this.letterBool = false;

	// method function to display the letter or underscore
	this.letterDisplay = function() {
        if (this.value === " "){
            //checks...
            this.letterBool = true;
            return " ";
        } if (this.letterBool === false) {
            return " _";
        } else {
            return this.value;
        }
    };
        
    };

module.exports = LetterConstructor;