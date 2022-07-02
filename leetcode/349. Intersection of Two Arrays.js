/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let intersection = nums1.filter(num => nums2.includes(num))
  let setIntersection = [...new Set(intersection)]
  return setIntersection
};