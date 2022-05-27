/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 오류가 나는 코드(runtime)
// var middleNode = function(head) {
//     let size = 0
//     let temp = []
//     let result = []

//     while(head.next !== null) {
//         temp.push(head.val)
//         head = head.next
//         size++
//     }
//     size += 1
//     temp.push(head.val)

//     let mid = Math.floor(size / 2)

//     for(let i=mid; i<size; i++) result.push(temp[i])

//     return result
// };

var middleNode = function(head) {
  let size = 0;
  let node = head;

  while(node !== null) {
    size++;
    node = node.next;
  }

  let mid = Math.floor(size / 2);
  node = head;

  for (let i=0; i<mid; i++) node = node.next;

  return node;
};