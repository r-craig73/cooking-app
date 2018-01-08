var myTablespoons = parseInt(prompt("How many tablespoons?"));

var newCups = function(inputTbsp) {return "You have " + (inputTbsp) * (1/16) + " cups";
};

alert(newCups(myTablespoons));
