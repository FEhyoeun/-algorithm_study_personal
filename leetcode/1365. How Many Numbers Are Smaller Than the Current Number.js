/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 다른 사람 코드 참고해서 푼 코드. 바로 떠올릴 수 있는 코드.
// var smallerNumbersThanCurrent = function(nums) {
//     let result = []
//     for(i=0; i<nums.length; i++) result.push(nums.filter((num) => num < nums[i]).length)
//     return result
// };

// 다른 사람 코드 중 효율적인 코드.
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((num) => nums.reduce((acc, cur) => acc + (num > cur ? 1 : 0), 0))
};