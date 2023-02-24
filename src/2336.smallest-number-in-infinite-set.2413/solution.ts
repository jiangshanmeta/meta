class SmallestInfiniteSet {
    current = 1;
    heap:number[] = []
    set = new Set<number>()
    constructor () {

    }

    popSmallest (): number {
        if (this.heap.length) {
            const result = this.heap[0];
            this.set.delete(result);
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            let index = 0;
            while (2 * index + 1 < this.heap.length) {
                let childIndex = 2 * index + 1;
                if (childIndex + 1 < this.heap.length && this.heap[childIndex + 1] < this.heap[childIndex]) {
                    childIndex++;
                }
                if (this.heap[index] > this.heap[childIndex]) {
                    swap(this.heap, index, childIndex);
                    index = childIndex;
                } else {
                    break;
                }
            }
            return result;
        }

        return this.current++;
    }

    addBack (num: number): void {
        if (num >= this.current || this.set.has(num)) {
            return;
        }
        this.heap.push(num);
        let index = this.heap.length - 1;
        while (index > 0) {
            const parent = (index - 1) >> 1;
            if (this.heap[parent] > this.heap[index]) {
                swap(this.heap, index, parent);
                index = parent;
            } else {
                break;
            }
        }
        this.set.add(num);
    }
}

function swap (nums:number[], i:number, j:number) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
