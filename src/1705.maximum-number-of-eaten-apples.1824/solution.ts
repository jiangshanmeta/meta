function eatenApples (apples: number[], days: number[]): number {
    let result = 0;
    const heap:number[][] = [];
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] !== 0) {
            heap.push([i + days[i], apples[i], ]);
            sideUp(heap);
        }
        while (heap.length && heap[0][0] <= i) {
            heapPop(heap);
        }
        if (heap.length) {
            result++;
            if (heap[0][1] > 1) {
                heap[0][1]--;
            } else {
                heapPop(heap);
            }
        }
    }
    let day = days.length;
    while (heap.length) {
        while (heap.length && heap[0][0] <= day) {
            heapPop(heap);
        }
        if (heap.length === 0) {
            break;
        }
        result++;
        if (heap[0][1] > 1) {
            heap[0][1]--;
        } else {
            heapPop(heap);
        }
        day++;
    }
    return result;
}

function swap (heap:number[][], i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function heapPop (heap:number[][]) {
    if (heap.length === 1) {
        heap.pop();
        return;
    }
    heap[0] = heap.pop();
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1][0] < heap[child][0]) {
            child++;
        }
        if (heap[index][0] > heap[child][0]) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}

function sideUp (heap:number[][]) {
    let index = heap.length - 1;
    while (index > 0) {
        const parent = ((index + 1) >> 1) - 1;
        if (heap[parent][0] > heap[index][0]) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}
