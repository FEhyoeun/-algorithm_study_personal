/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  reverseX = String(x).split("").reverse().join("")
  if(String(x) === reverseX) return true
  else return false
};