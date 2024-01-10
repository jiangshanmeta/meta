function subSort (array: number[]): number[] {
    const sorted = [...array, ].sort((a, b) => a - b);
    let m = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== sorted[i]) {
            m = i;
            break;
        }
    }
    if (m === -1) {
        return [-1, -1, ];
    }
    let n = array.length;
    for (let i = array.length - 1; i >= m; i--) {
        if (array[i] !== sorted[i]) {
            n = i;
            break;
        }
    }
    return [m, n, ];
}
