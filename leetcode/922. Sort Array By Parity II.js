/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let evenNumberArray = nums.filter(num => num % 2 === 0)
  let oddNumberArray = nums.filter(num => num % 2 !== 0)
  let resultArray = []
  for(let i=0; i<evenNumberArray.length; i++) {
    resultArray.push(evenNumberArray[i])
    resultArray.push(oddNumberArray[i])
  }
  return resultArray
};