function solution(nums) {
  let selectableNumber = nums.length / 2
  let setNumsSize = new Set(nums).size

  let max = selectableNumber < setNumsSize ? selectableNumber : setNumsSize
  return max
}