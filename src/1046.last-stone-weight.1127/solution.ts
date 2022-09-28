function lastStoneWeight (stones: number[]): number {
    for (let i = getParentIndex(stones.length - 1); i > -1; i--) {
        sideUp(stones, i);
    }
    while (stones.length > 1) {
        const a = stones[0];
        stones[0] = stones.pop();
        sideUp(stones, 0);
        const b = stones[0];
        if (a === b) {
            if (stones.length !== 1) {
                stones[0] = stones.pop();
                sideUp(stones, 0);
            } else {
                stones.pop();
            }
        } else {
            stones[0] = a - b;
            sideUp(stones, 0);
        }
    }
    if (stones.length === 1) {
        return stones[0];
    } else {
        return 0;
    }
}

function sideUp (heap:number[], index:number) {
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

function swap (heap:number[], i:number, j:number) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function getParentIndex (index:number) {
    return ((index + 1) >> 1) - 1;
}
