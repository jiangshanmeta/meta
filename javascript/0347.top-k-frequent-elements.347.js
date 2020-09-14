/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const uniqueNums = [];
    const countMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (countMap[nums[i]]) {
            countMap[nums[i]]++;
        } else {
            countMap[nums[i]] = 1;
            uniqueNums.push(nums[i]);
        }
    }
    // 最小堆 堆顶的频次最小
    const heap = [];
    for (let i = 0; i < uniqueNums.length; i++) {
        if (heap.length < k) {
            heap.push(uniqueNums[i]);
            sideUp(heap, heap.length - 1, countMap);
        } else if (countMap[heap[0]] < countMap[uniqueNums[i]]) {
            heap[0] = uniqueNums[i];
            sideDown(heap, 0, countMap);
        }
    }

    return heap.sort((a, b) => countMap[b] - countMap[a]);
};

function sideUp (heap, index, countMap) {
    while (index > 0) {
        const parent = (index - 1) >> 1;
        if (countMap[heap[parent]] > countMap[heap[index]]) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}

function swap (heap, i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideDown (heap, index, countMap) {
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && countMap[heap[child + 1]] < countMap[heap[child]]) {
            child++;
        }
        if (countMap[heap[index]] < countMap[heap[child]]) {
            break;
        }
        swap(heap, index, child);
        index = child;
    }
}
