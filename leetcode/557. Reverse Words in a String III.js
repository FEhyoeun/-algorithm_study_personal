/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  reverseArray = []
  s.split(" ").forEach(word => reverseArray.push(word.split("").reverse().join("")))
  return reverseArray.join(" ")
};