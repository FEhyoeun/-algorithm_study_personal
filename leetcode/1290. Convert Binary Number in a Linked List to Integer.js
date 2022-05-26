/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

// 재귀를 사용한 방법
var getDecimalValue = function(head, result) {
    if(!result) result = '';

    result += head.val;

    if(!head.next) return parseInt(result, 2);

    return getDecimalValue(head.next, result);
};