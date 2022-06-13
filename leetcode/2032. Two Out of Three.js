/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const setNums1 = new Set(nums1)
  const setNums2 = new Set(nums2)
  const setNums3 = new Set(nums3)
  const allNums = []
  allNums.push(...setNums1, ...setNums2, ...setNums3)
  let obj = {}
  let answer = []

  for(const num of allNums) {
    if(!obj[num]) obj[num] = 0
    obj[num]++
  }

  for(const [key, value] of Object.entries(obj)) {
    if(value > 1) answer.push(key)
  }

  return answer
};