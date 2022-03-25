/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sumList = []
    for(const account of accounts) {
        sumList.push(account.reduce((acc, cur) => acc + cur))
    }
    return Math.max(...sumList)
};