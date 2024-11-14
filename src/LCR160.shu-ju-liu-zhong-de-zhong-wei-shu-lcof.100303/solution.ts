class MedianFinder {
    private heap1:number[];
    private heap2:number[];
    constructor () {
        this.heap1 = [];
        this.heap2 = [];
    }

    addNum (num: number): void {
        if (this.heap1.length === 0) {
            this.heap1.push(num);
            return;
        }
        if (this.heap2.length === 0) {
            if (num < this.heap1[0]) {
                this.heap2.push(this.heap1[0]);
                this.heap1[0] = num;
            } else {
                this.heap2.push(num);
            }
            return;
        }
        const size = this.heap1.length + this.heap2.length;
        if (size & 1) {
            if (num > this.heap1[0]) {
                this.heap2.push(num);
                sideUp2(this.heap2);
            } else {
                this.heap2.push(this.heap1[0]);
                sideUp2(this.heap2);
                this.heap1[0] = num;
                sideDown1(this.heap1);
            }
        } else {
            if (num < this.heap2[0]) {
                this.heap1.push(num);
                sideUp1(this.heap1);
            } else {
                this.heap1.push(this.heap2[0]);
                sideUp1(this.heap1);
                this.heap2[0] = num;
                sideDown2(this.heap2);
            }
        }
    }

    findMedian (): number {
        const length = this.heap1.length + this.heap2.length;
        if (length & 1) {
            return this.heap1[0];
        } else {
            return (this.heap1[0] + this.heap2[0]) / 2;
        }
    }
}

function sideUp1 (heap) {
    let index = heap.length - 1;
    while (index > 0) {
        const parent = getParent(index);
        if (heap[parent] < heap[index]) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDown1 (heap) {
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1] > heap[child]) {
            child++;
        }
        if (heap[index] < heap[child]) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}

function sideUp2 (heap) {
    let index = heap.length - 1;
    while (index > 0) {
        const parent = getParent(index);
        if (heap[parent] > heap[index]) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDown2 (heap) {
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1] < heap[child]) {
            child++;
        }
        if (heap[child] < heap[index]) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}

function getParent (index) {
    return ((index + 1) >> 1) - 1;
}
function swap (array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
