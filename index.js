
function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString = reverseLetters.join('')

  if (word == reverseString){
    return true 
  } else {
    return false 
  }
}

/* 
  Add your pseudocode here
  declare arrayOfLetters to equal the argument passed into the parameter and splits the string into an array of substrings
  declare anmother vartiable to take the new split array and reverse the letters from the initial argument
  let another variable equal that variable joined which creates a new string by concatenating all elements from the newly made arrray when we split it.
  create an if loop that suggests when the argument passed is equal to our split/reveresed/joined string, it will return as true. otherwise (else) it will return as false
  */


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
