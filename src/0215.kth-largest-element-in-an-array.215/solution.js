/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 构建一个长度最大为k的小顶堆
    const heap = [];
    for (let i = 0; i < nums.length; i++) {
        if (heap.length < k) {
            heap.push(nums[i]);
            sideUp(heap, heap.length - 1);
        } else if (nums[i] > heap[0]) {
            heap[0] = nums[i];
            sideDown(heap, 0);
        }
    }
    // 小顶堆堆顶元素就是第k个元素
    return heap[0];
};

function swap (heap, i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideUp (heap, index) {
    while (index > 0) {
        const parent = (index - 1) >> 1;
        if (heap[parent] > heap[index]) {
            swap(heap, parent, index);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDown (heap, index) {
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1] < heap[child]) {
            child++;
        }
        if (heap[index] > heap[child]) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}
