/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let evenArray = nums.filter(num => num % 2 === 0)
  let oddArray = nums.filter(num => num % 2 !== 0)
  return evenArray.concat(oddArray)
};