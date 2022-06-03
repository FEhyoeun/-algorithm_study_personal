/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
};

// 0이 연속으로 나올 때 이전 index가 스킵되는 문제 발생 -> 접근법은 그대로 유지하되, i를 뒤에서부터!

// if(nums[i] === 0) {
//     nums.splice(i, 1)
//     nums.push(0)
// }

// 위의 코드를 아래처럼 바꿀 수도 있음

// nums[i]===0 && nums.splice(i, 1) && nums.push(0)
