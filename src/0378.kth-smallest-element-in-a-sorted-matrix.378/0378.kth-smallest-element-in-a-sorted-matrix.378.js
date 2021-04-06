/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 时间复杂度O(MNlogK) 基于堆
var kthSmallest = function (matrix, k) {
    // 最大长度为k的大顶堆
    const heap = [];
    const ROW = matrix.length;
    const COLUMN = matrix[0].length;
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COLUMN; j++) {
            if (heap.length < k) {
                heap.push(matrix[i][j]);
                sideUp(heap, heap.length - 1);
            } else if (matrix[i][j] < heap[0]) {
                heap[0] = matrix[i][j];
                sideDown(heap, 0);
            }
        }
    }
    return heap[0];
};

function swap (heap, i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideUp (heap, index) {
    while (index > 0) {
        const parent = (index - 1) >> 1;
        if (heap[parent] < heap[index]) {
            swap(heap, parent, index);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDown (heap, index) {
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

// 另一个基于堆的实现
// 时间复杂度O(KlogK)
// 当K非常接近于MN时，其实可以求第K大问题，这样还省点
// var kthSmallest = function (matrix, k) {
//     k--;
//     // 小顶堆
//     const heap = [];
//     const M = matrix.length;
//     const N = matrix[0].length;
//     const visited = new Array(matrix.length * matrix[0].length);
//     visited[0] = true;
//     heap[0] = [matrix[0][0], 0, 0, ];
//     // 堆中元素最多有k个，所以是O(KlogK)
//     for (let i = 0; i < k; i++) {
//         // 拿出堆中最小元素
//         const [value, x, y, ] = heap[0];
//         heap[0] = heap[heap.length - 1];
//         heap.pop();
//         sideDown(heap, 0);
//         // 然后把拿出元素右侧和下侧元素加入
//         if (y + 1 < N && !visited[N * x + y + 1]) {
//             visited[N * x + y + 1] = true;
//             heap.push([matrix[x][y + 1], x, y + 1, ]);
//             sideUp(heap, heap.length - 1);
//         }
//         if (x + 1 < M && !visited[N * (x + 1) + y]) {
//             visited[N * (x + 1) + y] = true;
//             heap.push([matrix[x + 1][y], x + 1, y, ]);
//             sideUp(heap, heap.length - 1);
//         }
//     }
//     return heap[0][0];
// };

// function swap (heap, i, j) {
//     const tmp = heap[i];
//     heap[i] = heap[j];
//     heap[j] = tmp;
// }

// function sideUp (heap, index) {
//     while (index > 0) {
//         const parent = (index - 1) >> 1;
//         if (heap[parent][0] > heap[index][0]) {
//             swap(heap, index, parent);
//             index = parent;
//         } else {
//             break;
//         }
//     }
// }

// function sideDown (heap, index) {
//     while (2 * index + 1 < heap.length) {
//         let child = 2 * index + 1;
//         if (child + 1 < heap.length && heap[child + 1][0] < heap[child][0]) {
//             child++;
//         }
//         if (heap[index][0] > heap[child][0]) {
//             swap(heap, index, child);
//             index = child;
//         } else {
//             break;
//         }
//     }
// }
