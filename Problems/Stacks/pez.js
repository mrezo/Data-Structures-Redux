// You have a Pez dispenser full of red, white and blue candies.
// Create an algorithm that removes only the white candies
// from the dispenser and keeps the other candies in the 
// same order.

var Stack = require('../../stacks');

var candies = ['white', 'red', 'red', 'blue', 'red', 'white', 'blue', 'white'];

var whiteRemover = function (pez) {
  var whites = new Stack();
  var colors = new Stack();
  var result = pez.slice();

  while (result.length) {
    var candy = result.pop()
    if (candy === 'white') {
      whites.push(candy)
    } else {
      colors.push(candy);
    }
  };

  while (colors.size()) {
    var tempCandy = colors.pop();
    result.push(tempCandy);
  }

  return result;
}

console.log(whiteRemover(candies));