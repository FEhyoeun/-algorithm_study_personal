/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let lengthList = []
    for(const sentence of sentences) {
        lengthList.push(sentence.split(' ').length)
    }
    return Math.max(...lengthList)
};