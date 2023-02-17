function maxKelements (nums: number[], k: number): number {
    let result = 0;
    heapify(nums);
    while (k > 0 && nums[0] > 0) {
        result += nums[0];
        nums[0] = Math.ceil(nums[0] / 3);
        sideDown(nums, 0);
        k--;
    }
    return result;
}

function swap (heap:number[], i:number, j:number) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideDown (heap:number[], index:number) {
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1] > heap[child]) {
            child++;
        }
        if (heap[child] > heap[index]) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}

function heapify (heap:number[]) {
    let index = (heap.length - 2) >> 1;
    while (index > -1) {
        sideDown(heap, index);
        index--;
    }
}
