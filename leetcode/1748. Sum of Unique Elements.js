/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let hash = new Map()
  let sum = 0

  for(const num of nums) {
    if(hash[num]) hash[num]++
    else hash[num] = 1
  }

  for(const [key, value] of Object.entries(hash)) {
    if(value === 1) sum += Number(key)
  }

  return sum
};