/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     if(nums1.length - nums2.length > 0) { // nums1의 배열이 nums2보다 더 클 때
//         const array = nums1.filter((num1) => nums2.includes(num1))
//         return array
//     } else { // nums2의 배열이 nums1보다 더 클 때
//         const array = nums2.filter((num2) => nums1.includes(num2 )
//         return array
//     }
// };

// 내 풀이
// [4,9,5]
// [9,4,9,8,4]
// 이 경우에 [9,4,9,4]를 리턴하게 됨


var intersect = function(nums1, nums2) {
  const answer = [];
  for(let n1 of nums1) {
    const index = nums2.indexOf(n1);
    if(index > -1) { // nums2 안에 n1이 있으면
      const deleted = nums2.splice(index, 1);
      answer.push(deleted);
    }
  }
  return answer;
};