/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const setNums = new Set(nums)
  if(setNums.size === nums.length) return false
  else return true
};