function maximumProduct (nums: number[], k: number): number {
    for (let i = (nums.length - 2) >> 1; i >= 0; i--) {
        down(nums, i);
    }
    while (k > 0) {
        nums[0]++;
        down(nums, 0);
        k--;
    }
    let res = 1;
    const MOD = 10 ** 9 + 7;
    for (let i = 0; i < nums.length; i++) {
        res = (res * nums[i]) % MOD;
    }

    return res;
}

function down (heap:number[], index:number) {
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

function swap (arr:number[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
