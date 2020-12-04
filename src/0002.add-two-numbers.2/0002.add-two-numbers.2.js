/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head1 = l1;
    let head2 = l2;
    // add是进位
    let add = 0;
    let before = l1;
    while (head1 && head2) {
        const sum = head1.val + head2.val + add;
        // 合并到l1上
        head1.val = sum % 10;
        add = (sum - head1.val) / 10;
        before = head1;
        head1 = head1.next;
        head2 = head2.next;
    }
    // 处理l1/l2多出来的位和进位
    if (head1) {
        if (add) {
            before.next = addTwoNumbers(head1, new ListNode(add));
        }
    } else if (head2) {
        if (add) {
            before.next = addTwoNumbers(head2, new ListNode(add));
        } else {
            before.next = head2;
        }
    } else if (add) {
        before.next = new ListNode(add);
    }
    return l1;
};
