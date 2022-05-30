/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// 처음엔 삽입 정렬 문제인 줄 알았으나, 결과를 오름차순이나 내림차순으로 정렬하진 않음.
// 다른 분 코드를 보고 문제를 이해함.
var shuffle = function(nums, n) {
  const result = []
  for (i=0; i<n; i++) {
    result.push(nums[i])
    result.push(nums[i + n])
  }
  return result;
};