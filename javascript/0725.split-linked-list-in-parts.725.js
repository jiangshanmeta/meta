/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    let head = root;
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }

    const per = count / k | 0;
    // 先确定每个分割有多少节点
    const nums = new Array(k).fill(per);
    if (per * k < count) {
        let rest = count - per * k;
        let index = 0;
        while (rest > 0) {
            nums[index++]++;
            rest--;
        }
    }

    const result = [];
    head = root;
    let cur = head;
    let prev;
    // 老老实实计数切割链表
    for (let i = 0; i < nums.length; i++) {
        const target = nums[i];
        if (target === 0) {
            result[i] = null;
        } else {
            let count = 0;
            while (cur && count < target) {
                count++;
                prev = cur;
                cur = cur.next;
            }
            prev.next = null;
            result[i] = head;
            head = cur;
        }
    }

    return result;
};
