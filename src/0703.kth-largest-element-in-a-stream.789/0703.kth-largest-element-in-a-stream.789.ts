class KthLargest {
    private heap:number[];
    private k:number;
    constructor (k: number, nums: number[]) {
        this.heap = [];
        this.k = k;
        for (let i = 0; i < nums.length; i++) {
            this.add2Heap(nums[i]);
        }
    }

    add (val: number): number {
        this.add2Heap(val);
        return this.heap[0];
    }

    add2Heap (val:number) {
        if (this.heap.length < this.k) {
            this.heap.push(val);
            let index = this.heap.length - 1;
            while (index > 0) {
                const parent = ((index + 1) >> 1) - 1;
                if (this.heap[parent] > this.heap[index]) {
                    const tmp = this.heap[parent];
                    this.heap[parent] = this.heap[index];
                    this.heap[index] = tmp;
                    index = parent;
                } else {
                    break;
                }
            }
        } else if (val > this.heap[0]) {
            this.heap[0] = val;
            let index = 0;
            while (2 * index + 1 < this.heap.length) {
                let child = 2 * index + 1;
                if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
                    child++;
                }
                if (this.heap[child] < this.heap[index]) {
                    const tmp = this.heap[child];
                    this.heap[child] = this.heap[index];
                    this.heap[index] = tmp;
                    index = child;
                } else {
                    break;
                }
            }
        }
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
