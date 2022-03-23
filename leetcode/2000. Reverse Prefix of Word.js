/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    index = word.indexOf(ch) + 1
    tempWord = word.slice(0, index).split("").reverse().join("")
    newWord = tempWord.concat(word.slice(index))
    return newWord
};