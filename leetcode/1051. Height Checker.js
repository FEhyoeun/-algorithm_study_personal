/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sortedArray = [...heights].sort((a, b) => a - b)
    const length = heights.length
    let count = 0
    for(let i=0; i<length; i++) {
        if(sortedArray[i] !== heights[i]) count++
    }
    return count
};