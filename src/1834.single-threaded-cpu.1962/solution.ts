function getOrder (tasks: number[][]): number[] {
    tasks.forEach((item, index) => item.push(index));
    tasks.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[2] - b[2];
    });
    const heap:number[][] = [];
    heap[0] = tasks[0];
    let index = 1;
    const result:number[] = [];
    let endTime = 0;
    while (heap.length) {
        const node = heap[0];
        result.push(node[2]);
        heap[0] = heap[heap.length - 1];
        heap.pop();
        heap.length && sideDown(heap);
        endTime = Math.max(endTime, node[0]) + node[1];
        while (index < tasks.length && tasks[index][0] <= endTime) {
            heap.push(tasks[index++]);
            sideUp(heap);
        }
        if (index < tasks.length && heap.length === 0) {
            heap[0] = tasks[index++];
        }
    }
    return result;
}

function isPri (node1:number[], node2:number[]) {
    if (node1[1] < node2[1]) {
        return true;
    } else if (node1[1] === node2[1]) {
        return node1[2] < node2[2];
    }
    return false;
}

function swap<T> (arr:T[], i:number, j:number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function sideDown (heap:number[][]) {
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && isPri(heap[child + 1], heap[child])) {
            child++;
        }
        if (isPri(heap[child], heap[index])) {
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
        if (isPri(heap[index], heap[parent])) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}
