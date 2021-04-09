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
    const heap:ListNode[] = [];
    for (let i = 0; i < lists.length; i++) {
        if (!lists[i]) {
            continue;
        }
        add2heap(heap, lists[i]);
    }
    const dummyHead = new ListNode(0);
    let tail = dummyHead;
    while (heap.length) {
        tail.next = removeTop(heap);
        tail = tail.next;
    }
    return dummyHead.next;
}

function add2heap (heap:ListNode[], head:ListNode) {
    heap.push(head);
    let index = heap.length - 1;
    while (index > 0) {
        const parent = ((index + 1) >> 1) - 1;
        if (heap[parent].val > heap[index].val) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}

function swap<T> (arr:T[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function sink (heap:ListNode[]) {
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1].val < heap[child].val) {
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

function removeTop (heap:ListNode[]):ListNode {
    const top = heap[0];
    const next = top.next;
    top.next = null;
    if (next) {
        heap[0] = next;
        sink(heap);
    } else {
        heap[0] = heap[heap.length - 1];
        heap.pop();
        heap.length && sink(heap);
    }

    return top;
}
