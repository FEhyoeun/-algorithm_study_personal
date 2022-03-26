/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let obj = {}
    let result = []
    for(word of s.split(" ")) {
        let temp = word.slice(0, -1)
        obj[word.at(-1)] = temp
    }

    for(let value of Object.values(obj)) {
        result.push(value)
    }

    return result.join(" ")
};