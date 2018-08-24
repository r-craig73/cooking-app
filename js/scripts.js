var myTablespoons = parseInt(prompt("How many tablespoons?"));

var newCups = function(inputTbsp) {
  return "You have " + ((inputTbsp) * (1/16)).toPrecision(4) + " cups";
};

alert(newCups(myTablespoons));
