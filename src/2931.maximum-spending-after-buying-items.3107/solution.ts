interface HeapItem {
    value:number,
    x:number,
    y:number,
}

function maxSpending (values: number[][]): number {
    const M = values.length;
    const N = values[0].length;
    const heap:HeapItem[] = [];
    for (let i = 0; i < M; i++) {
        heap.push({
            value: values[i][N - 1],
            x: i,
            y: N - 1,
        });
    }
    const swap = (i:number, j:number) => {
        const tmp = heap[i];
        heap[i] = heap[j];
        heap[j] = tmp;
    };

    const down = (index:number) => {
        while (2 * index + 1 < heap.length) {
            let childIndex = 2 * index + 1;
            if (childIndex + 1 < heap.length && heap[childIndex + 1].value < heap[childIndex].value) {
                childIndex++;
            }
            if (heap[index].value > heap[childIndex].value) {
                swap(index, childIndex);
                index = childIndex;
            } else {
                break;
            }
        }
    };

    for (let i = (M - 2) >> 1; i > -1; i--) {
        down(i);
    }
    let res = 0;
    let d = 1;
    while (heap.length) {
        const { value, x, y, } = heap[0];
        res += d * value;
        d++;
        if (y === 0) {
            heap[0] = heap[heap.length - 1];
            heap.pop();
        } else {
            heap[0] = {
                value: values[x][y - 1],
                x,
                y: y - 1,
            };
        }
        if (heap.length) {
            down(0);
        }
    }
    return res;
}
