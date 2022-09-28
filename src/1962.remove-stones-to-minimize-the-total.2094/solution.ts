function minStoneSum (piles: number[], k: number): number {
    for (let i = (piles.length >> 1) - 1; i > -1; i--) {
        sideDown(piles, i);
    }
    while (k--) {
        if (piles[0] === 1) {
            break;
        }
        piles[0] -= (piles[0]) >> 1;
        sideDown(piles, 0);
    }
    return piles.reduce((sum, item) => {
        return sum + item;
    }, 0);
}

function swap<T> (arr:T[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
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
