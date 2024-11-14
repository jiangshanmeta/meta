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

function mergeKLists (lists: Array<ListNode | null>): ListNode | null {
    lists = lists.filter(item => item);
    if (!lists.length) {
        return null;
    }

    const dummyHead = new ListNode(0);
    let last = dummyHead;
    heapify(lists);

    while (lists.length > 1) {
        const node = lists[0];
        const next = node.next;
        node.next = null;
        last.next = node;
        last = node;
        if (next) {
            lists[0] = next;
            sideDown(lists, 0);
        } else {
            lists[0] = lists.pop();
            sideDown(lists, 0);
        }
    }
    last.next = lists[0];

    return dummyHead.next;
}

function swap<T> (arr:T[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function sideDown (heap:ListNode[], index:number) {
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child].val > heap[child + 1].val) {
            child++;
        }
        if (heap[child].val < heap[index].val) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}

function heapify (heap:ListNode[]) {
    let index = (heap.length - 2) >> 1;
    while (index > -1) {
        sideDown(heap, index--);
    }
}
