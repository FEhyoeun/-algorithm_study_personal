/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 내 풀이
// var searchInsert = function(nums, target) {
//     if(nums.includes(target)) return nums.indexOf(target)
//     nums.push(target)
//     nums.sort((a, b) => a - b)
//     return nums.indexOf(target)
// };

// 다른 사람 풀이(이진 탐색으로 logN 시간 복잡도)
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length

  while(left < right) {
    const mid = left + Math.floor((right - left) / 2)

    if(nums[mid] === target) return mid
    else if(nums[mid] > target) right = mid
    else left = mid + 1
  }

  return left
};
