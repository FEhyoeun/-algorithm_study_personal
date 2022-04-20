/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length + 1
  let newArray = [...Array(n)].map((_, i) => i) // 0부터 n까지의 array
  nums.sort((a, b) => a - b)

  for(let i=0; i<newArray.length; i++) {
    if(newArray[i] !== nums[i] || nums[i] === undefined) return newArray[i]
  }
};