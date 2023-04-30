function findRotation (mat: number[][], target: number[][]): boolean {
    for (let i = 0; i < 4; i++) {
        if (isSame(mat, target)) {
            return true;
        }
        i < 3 && rotate(mat);
    }
    return false;
}

function isSame (mat:number[][], target:number[][]):boolean {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] !== target[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function rotate (matrix: number[][]): void {
    const n = matrix.length;
    if (n === 0) {
        return;
    }
    for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
}
