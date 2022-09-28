/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new Array(k + 1).fill(-Infinity);
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (val > this.heap[1]) {
        let index = 1;
        const L = this.heap.length;
        while (true) {
            // 和左右子节点中最小的交换
            if (2 * index < L && this.heap[2 * index] < val) {
                if (2 * index + 1 < L && this.heap[2 * index + 1] < this.heap[2 * index]) {
                    this.heap[index] = this.heap[2 * index + 1];
                    index = 2 * index + 1;
                } else {
                    this.heap[index] = this.heap[2 * index];
                    index = 2 * index;
                }
            } else if (2 * index + 1 < L && this.heap[2 * index + 1] < val) {
                this.heap[index] = this.heap[2 * index + 1];
                index = 2 * index + 1;
            } else {
                break;
            }
        }
        this.heap[index] = val;
    }
    // 返回堆顶元素
    return this.heap[1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
