/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    const heap = [];

    const swap = (i, j) => {
        const tmp = heap[i];
        heap[i] = heap[j];
        heap[j] = tmp;
    };

    const heapPop = () => {
        const result = heap[0];
        if (heap.length === 1) {
            heap.pop();
            return result;
        }
        heap[0] = heap.pop();
        let index = 0;
        while (2 * index + 1 < heap.length) {
            let childIndex = 2 * index + 1;
            if (childIndex + 1 < heap.length && nums[heap[childIndex + 1]] < nums[heap[childIndex]]) {
                childIndex++;
            }
            if (nums[heap[childIndex]] < nums[heap[index]]) {
                swap(index, childIndex);
                index = childIndex;
            } else {
                break;
            }
        }
        return result;
    };

    const heapPush = (n) => {
        heap.push(n);
        let index = heap.length - 1;
        while (index > 0) {
            const parent = (index - 1) >>> 1;

            if (nums[heap[parent]] > nums[heap[index]]) {
                swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    };

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        while (heap.length && nums[heap[0]] < num) {
            const index = heapPop();
            result[index] = num;
        }

        while (stack.length && num > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            heapPush(index);
        }
        stack.push(i);
    }

    return result;
};
