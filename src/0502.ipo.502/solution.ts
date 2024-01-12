function findMaximizedCapital (k: number, w: number, profits: number[], capitals: number[]): number {
    const profitWithCapital = profits.map((profit, index) => {
        return {
            profit,
            capital: capitals[index],
        };
    }).sort((a, b) => a.capital - b.capital);

    const heap:number[] = [];
    let index = 0;
    while (index < profitWithCapital.length && profitWithCapital[index].capital <= w) {
        heap.push(profitWithCapital[index++].profit);
    }

    const swap = (i:number, j:number) => {
        const tmp = heap[i];
        heap[i] = heap[j];
        heap[j] = tmp;
    };

    const down = (pIndex:number) => {
        while (2 * pIndex + 1 < heap.length) {
            let cIndex = 2 * pIndex + 1;
            if (cIndex + 1 < heap.length && heap[cIndex + 1] > heap[cIndex]) {
                cIndex++;
            }
            if (heap[cIndex] > heap[pIndex]) {
                swap(pIndex, cIndex);
                pIndex = cIndex;
            } else {
                break;
            }
        }
    };

    const up = (cIndex:number) => {
        while (cIndex > 0) {
            const pIndex = (cIndex - 1) >> 1;
            if (heap[cIndex] > heap[pIndex]) {
                swap(cIndex, pIndex);
                cIndex = pIndex;
            } else {
                break;
            }
        }
    };

    if (heap.length === 0) {
        return w;
    }

    if (heap.length > 1) {
        for (let i = (heap.length - 2) >> 1; i > -1; i--) {
            down(i);
        }
    }

    while (k > 0) {
        if (heap.length === 0) {
            break;
        }
        w += heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        if (heap.length) {
            down(0);
        }
        while (index < profitWithCapital.length && profitWithCapital[index].capital <= w) {
            heap.push(profitWithCapital[index++].profit);
            up(heap.length - 1);
        }
        k--;
    }

    return w;
}
