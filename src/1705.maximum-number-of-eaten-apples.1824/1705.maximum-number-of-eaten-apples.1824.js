/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
    const heap = [];
    let result = 0;
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] > 0) {
            heap.push([i + days[i], apples[i], ]);
            sideUp(heap);
        }
        while (heap.length && heap[0][0] <= i) {
            heapPop(heap);
        }

        if (heap.length === 0) {
            continue;
        }
        result++;
        if (heap[0][1] > 1) {
            heap[0][1]--;
        } else {
            heapPop(heap);
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
        day++;
        if (heap[0][1] > 1) {
            heap[0][1]--;
        } else {
            heapPop(heap);
        }
    }

    return result;
};

function heapPop (heap) {
    if (heap.length === 1) {
        heap.pop();
        return;
    }
    heap[0] = heap.pop();
    sideDown(heap);
}

function swap (list, i, j) {
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
}

function sideUp (heap) {
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

function sideDown (heap) {
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1][0] < heap[child][0]) {
            child++;
        }
        if (heap[child][0] < heap[index][0]) {
            swap(heap, child, index);
            index = child;
        } else {
            break;
        }
    }
}
