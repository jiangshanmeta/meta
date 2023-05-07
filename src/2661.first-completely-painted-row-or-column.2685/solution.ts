function firstCompleteIndex (arr: number[], mat: number[][]): number {
    const M = mat.length;
    const N = mat[0].length;
    const coordinates = new Array<[number, number]>(arr.length + 1);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            coordinates[mat[i][j]] = [i, j, ];
        }
    }
    const rows = new Array<number>(M).fill(0);
    const columns = new Array<number>(N).fill(0);
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const [x, y, ] = coordinates[num];
        rows[x]++;
        columns[y]++;
        if (rows[x] === N || columns[y] === M) {
            return i;
        }
    }
    return 0;
}
