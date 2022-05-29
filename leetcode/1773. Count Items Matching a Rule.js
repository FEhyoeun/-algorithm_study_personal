// 내가 짠 코드
// var countMatches = function(items, ruleKey, ruleValue) {
//     let result = 0

//     if(ruleKey === 'color') {
//         for(let i=0; i<items.length; i++) {
//             if(items[i][1] === ruleValue) result++
//         }
//     } else if(ruleKey === 'type') {
//         for(let i=0; i<items.length; i++) {
//             if(items[i][0] === ruleValue) result++
//         }
//     } else {
//         for(let i=0; i<items.length; i++) {
//             if(items[i][2] === ruleValue) result++
//         }
//     }

//     return result
// };

// 남이 짠 코드
// 객체를 하는 데까지는 생각했으나, 활용하진 못 함
var countMatches = function(items, ruleKey, ruleValue) {
  const types = {
    "type": 0,
    "color": 1,
    "name": 2
  }

  return items.filter((item) => {
    return item[types[ruleKey]] === ruleValue;
  }).length;
};