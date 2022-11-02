function secondGreaterElement (nums: number[]): number[] {
    const result = new Array<number>(nums.length).fill(-1);
    // stack存放还没遇到第一大数的元素的索引
    const stack:number[] = [];
    // 小顶堆 存放遇到了第一大数但是还没遇到第二大数字的元素的索引
    // 是按照索引对应的元素进行排序的 元素最小的在堆顶
    const heap:number[] = [];

    const swap = (i:number, j:number) => {
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

    const heapPush = (n:number) => {
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
}
