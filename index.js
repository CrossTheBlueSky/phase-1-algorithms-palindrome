/*Logical Breakdown
  Basic Palindrome Problem With Strings
  1. First I'd convert the string to an array to get access toReversed()
  2. return array === array.toReversed()
  
  Appended
  1. toReversed doesn't seem to be implemented yet, so I'll use the old method
  2. convert string to arr
  3. Slice the full string and reverse into a new variable
  4. convert new arr to string and compare to input
*/

function isPalindrome(word) {
  // Write your algorithm here
  const rev = word.split("").slice().reverse()
  return word === rev.join("")
}

/* 
  Add your pseudocode here
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
