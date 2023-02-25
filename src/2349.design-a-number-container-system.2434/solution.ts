class NumberContainers {
    indexNumberMap = new Map<number, number>()
    numberIndexHeapMap = new Map<number, number[]>()
    numberIndexSetMap = new Map<number, Set<number>>()
    constructor () {

    }

    change (index: number, number: number): void {
        this.indexNumberMap.set(index, number);
        if (!this.numberIndexHeapMap.has(number)) {
            this.numberIndexHeapMap.set(number, []);
            this.numberIndexSetMap.set(number, new Set());
        }
        const heap = this.numberIndexHeapMap.get(number)!;
        const set = this.numberIndexSetMap.get(number)!;
        if (set.has(index)) {
            return;
        }

        heap.push(index);
        set.add(index);

        let childIndex = heap.length - 1;
        while (childIndex > -1) {
            const parentIndex = (childIndex - 1) >> 1;
            if (heap[parentIndex] > heap[childIndex]) {
                swap(heap, childIndex, parentIndex);
                childIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    find (number: number): number {
        if (!this.numberIndexHeapMap.has(number)) {
            return -1;
        }
        const heap = this.numberIndexHeapMap.get(number)!;
        const set = this.numberIndexSetMap.get(number)!;
        while (heap.length && this.indexNumberMap.get(heap[0]) !== number) {
            set.delete(heap[0]);
            heap[0] = heap[heap.length - 1];
            heap.pop();
            sideDown(heap);
        }
        return heap.length ? heap[0] : -1;
    }
}

function swap<T> (arr:T[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function sideDown (heap:number[]) {
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

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
