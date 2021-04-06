function containsPattern (arr: number[], m: number, k: number): boolean {
    for (let i = 0; i <= arr.length - m * k; i++) {
        if (check(arr, m, k, i)) {
            return true;
        }
    }
    return false;
}

function check (arr:number[], m:number, k, start:number):boolean {
    for (let i = 1; i < k; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[start + j] !== arr[start + i * m + j]) {
                return false;
            }
        }
    }
    return true;
}
