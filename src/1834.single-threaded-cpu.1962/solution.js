/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    tasks.forEach((item, index) => {
        item.push(index);
    });
    tasks.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[2] - b[2];
    });
    const heap = [];
    const result = [];
    heap[0] = tasks[0];
    let index = 1;
    let endTime = 0;
    while (heap.length) {
        const node = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        sideDonw(heap);
        result.push(node[2]);
        endTime = Math.max(endTime, node[0]) + node[1];

        while (index < tasks.length && tasks[index][0] <= endTime) {
            heap.push(tasks[index++]);
            sideUp(heap);
        }
        if (heap.length === 0 && index < tasks.length) {
            heap.push(tasks[index++]);
        }
    }
    return result;
};

function sideUp (heap) {
    let index = heap.length - 1;
    while (index > 0) {
        const parent = ((index + 1) >> 1) - 1;
        if (isPriority(heap[index], heap[parent])) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDonw (heap) {
    let index = 0;
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && isPriority(heap[child + 1], heap[child])) {
            child++;
        }
        if (isPriority(heap[child], heap[index])) {
            swap(heap, child, index);
            index = child;
        } else {
            break;
        }
    }
}

function swap (heap, i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

// node1比node2优先吗？
function isPriority (node1, node2) {
    if (node1[1] < node2[1]) {
        return true;
    }
    if (node1[1] === node2[1]) {
        return node1[2] < node2[2];
    }
    return false;
}
