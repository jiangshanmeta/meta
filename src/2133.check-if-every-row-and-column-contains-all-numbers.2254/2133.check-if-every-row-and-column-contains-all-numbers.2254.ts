function checkValid (matrix: number[][]): boolean {
    const N = matrix.length;
    const set = new Set<number>();
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            set.add(matrix[i][j]);
        }
        if (set.size !== N) {
            return false;
        }
        set.clear();
    }
    for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
            set.add(matrix[i][j]);
        }
        if (set.size !== N) {
            return false;
        }
        set.clear();
    }
    return true;
}
