/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
    const heap1 = [];
    const heap2 = [];
    for (let i = 0; i < candidates; i++) {
        heap1.push(costs[i]);
    }
    let left = candidates - 1;
    let right = costs.length - 1;
    while (right > left && heap2.length < candidates) {
        heap2.push(costs[right--]);
    }
    heapify(heap1);
    heapify(heap2);
    let result = 0;

    while (k > 0) {
        if (heap1.length && heap2.length) {
            if (heap2[0] < heap1[0]) {
                result += heapPop(heap2);
                if (right > left) {
                    heapPush(heap2, costs[right--]);
                }
            } else {
                result += heapPop(heap1);
                if (right > left) {
                    heapPush(heap1, costs[++left]);
                }
            }
        } else if (heap1.length) {
            result += heapPop(heap1);
        } else {
            result += heapPop(heap2);
        }

        k--;
    }

    return result;
};

function heapPush (heap, num) {
    heap.push(num);
    let index = heap.length - 1;
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

function heapPop (nums) {
    const result = nums[0];
    if (nums.length === 1) {
        nums.pop();
        return result;
    }
    nums[0] = nums.pop();
    downstairs(nums, 0);
    return result;
}

function swap (num, i, j) {
    const tmp = num[i];
    num[i] = num[j];
    num[j] = tmp;
}

function swap (nums, i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

function downstairs (nums, index) {
    while (2 * index + 1 < nums.length) {
        let childIndex = 2 * index + 1;
        if (childIndex + 1 < nums.length && nums[childIndex + 1] < nums[childIndex]) {
            childIndex++;
        }
        if (nums[childIndex] < nums[index]) {
            swap(nums, index, childIndex);
            index = childIndex;
        } else {
            break;
        }
    }
}

function heapify (nums) {
    for (let i = (nums.length - 2) >> 1; i > -1; i--) {
        downstairs(nums, i);
    }
}
