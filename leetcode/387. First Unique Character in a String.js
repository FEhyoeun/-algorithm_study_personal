/**
 * @param {string} s
 * @return {number}
 */
// 내 풀이
// 테스트 케이스 2번에서 막힌다
// var firstUniqChar = function(s) {
//     for(let i=0; i<s.length; i++) {
//         if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
//         else return -1
//     }
// };


var firstUniqChar = function(s) {
  let obj = s.split('').reduce((acc,val)=>{
    if(!acc[val]) acc[val] = 1;
    else acc[val]++;
    return acc;
  },{})
  for(let i in obj){
    if(obj[i] === 1){
      return s.indexOf(i);
    }
  }
  return -1;
};