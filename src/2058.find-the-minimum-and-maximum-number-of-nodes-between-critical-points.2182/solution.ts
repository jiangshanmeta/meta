/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nodesBetweenCriticalPoints (head: ListNode | null): number[] {
    if (!head) {
        return [-1, -1, ];
    }
    const vals:number[] = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    const indexs:number[] = [];
    for (let i = 1; i < vals.length - 1; i++) {
        if (vals[i] > vals[i - 1] && vals[i] > vals[i + 1]) {
            indexs.push(i);
        }
        if (vals[i] < vals[i - 1] && vals[i] < vals[i + 1]) {
            indexs.push(i);
        }
    }
    if (indexs.length < 2) {
        return [-1, -1, ];
    }
    let min = indexs[1] - indexs[0];
    for (let i = 2; i < indexs.length; i++) {
        min = Math.min(min, indexs[i] - indexs[i - 1]);
    }

    return [min, indexs[indexs.length - 1] - indexs[0], ];
}
