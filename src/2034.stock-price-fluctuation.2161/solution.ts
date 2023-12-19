class StockPrice {
    private lastTS = 0;
    private lastPrice = 0;
    private maxHeap = new Array<{ts:number, price:number}>();
    private maxHeapTSIndexMap = new Map<number, number>()
    private minHeap = new Array<{ts:number, price:number}>();
    private minHeapTSIndexMap = new Map<number, number>();
    constructor () {

    }

    update (timestamp: number, price: number): void {
        if (timestamp >= this.lastTS) {
            this.lastTS = timestamp;
            this.lastPrice = price;
        }
        if (this.maxHeapTSIndexMap.has(timestamp)) {
            let index = this.maxHeapTSIndexMap.get(timestamp)!;
            this.maxHeap[index].price = price;
            while (true) {
                this.maxHeapDown(index);
                if (index === 0) {
                    break;
                }
                index = (index - 1) >> 1;
            }
        } else {
            let index = this.maxHeap.length;
            this.maxHeap.push({
                ts: timestamp,
                price,
            });
            this.maxHeapTSIndexMap.set(timestamp, index);
            while (index > 0) {
                const p = (index - 1) >> 1;
                if (this.maxHeap[p].price < this.maxHeap[index].price) {
                    this.swap(
                        this.maxHeap[p].ts,
                        this.maxHeap[index].ts,
                        p,
                        index,
                        this.maxHeapTSIndexMap,
                        this.maxHeap
                    );
                    index = p;
                } else {
                    break;
                }
            }
        }

        if (this.minHeapTSIndexMap.has(timestamp)) {
            let index = this.minHeapTSIndexMap.get(timestamp)!;
            this.minHeap[index].price = price;
            while (true) {
                this.minHeapDown(index);
                if (index === 0) {
                    break;
                }
                index = (index - 1) >> 1;
            }
        } else {
            let index = this.minHeap.length;
            this.minHeap.push({
                ts: timestamp,
                price,
            });
            this.minHeapTSIndexMap.set(timestamp, index);
            while (index > 0) {
                const p = (index - 1) >> 1;
                if (this.minHeap[p].price > this.minHeap[index].price) {
                    this.swap(
                        this.minHeap[p].ts,
                        this.minHeap[index].ts,
                        p,
                        index,
                        this.minHeapTSIndexMap,
                        this.minHeap
                    );
                    index = p;
                } else {
                    break;
                }
            }
        }
    }

    private swap (
        ts1:number,
        ts2:number,
        index1:number,
        index2:number,
        map:Map<number, number>,
        heap:{ts:number, price:number}[]
    ) {
        const tmp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = tmp;
        map.set(ts1, index2);
        map.set(ts2, index1);
    }

    private maxHeapDown (index:number) {
        const heap = this.maxHeap;
        while (2 * index + 1 < heap.length) {
            let child = 2 * index + 1;
            if (child + 1 < heap.length && heap[child + 1].price > heap[child].price) {
                child++;
            }
            if (heap[child].price > heap[index].price) {
                this.swap(
                    heap[index].ts,
                    heap[child].ts,
                    index,
                    child,
                    this.maxHeapTSIndexMap,
                    heap
                );
                index = child;
            } else {
                break;
            }
        }
    }

    private minHeapDown (index:number) {
        const heap = this.minHeap;
        while (2 * index + 1 < heap.length) {
            let child = 2 * index + 1;
            if (child + 1 < heap.length && heap[child + 1].price < heap[child].price) {
                child++;
            }
            if (heap[child].price < heap[index].price) {
                this.swap(
                    heap[index].ts,
                    heap[child].ts,
                    index,
                    child,
                    this.minHeapTSIndexMap,
                    heap
                );
                index = child;
            } else {
                break;
            }
        }
    }

    current (): number {
        return this.lastPrice;
    }

    maximum (): number {
        return this.maxHeap[0].price;
    }

    minimum (): number {
        return this.minHeap[0].price;
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
