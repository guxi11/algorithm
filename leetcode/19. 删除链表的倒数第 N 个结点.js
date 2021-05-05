// link, two pointers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let preHead = pre = {}, left = right = head;
    preHead.next = head;
    while (n--) {
        right = right.next;
    }
    while (right) {
        pre = left;
        left = left.next;
        right = right.next;
    }
    // 现在 left 是倒数第 n 个节点，right 是倒数第 0 （null）
    pre.next = left.next;
    return preHead.next;
};