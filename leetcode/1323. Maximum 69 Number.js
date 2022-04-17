/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let str = String(num)
  return Number(str.replace('6', '9'))
};