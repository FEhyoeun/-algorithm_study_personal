/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let reverseArray = []

    for(let i=0; i<words.length; i++) {
        let reverseWord = words[i].split("").reverse().join("")
        if(words[i] == reverseWord) reverseArray.push(reverseWord)
    }

    if(reverseArray.length > 0) {
        return reverseArray[0]
    } else {
        return ""
    }
};