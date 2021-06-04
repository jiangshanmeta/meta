function printVertically (s: string): string[] {
    const list = s.split(' ');
    const N = list.length;
    const M = Math.max(...list.map(item => item.length));
    const matrix:string[][] = new Array(M);
    for (let i = 0; i < M; i++) {
        matrix[i] = new Array(N).fill(' ');
    }
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            matrix[j][i] = list[i][j];
        }
    }
    const result:string[] = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = N - 1; j > -1; j--) {
            if (matrix[i][j] !== ' ') {
                break;
            }
            matrix[i][j] = '';
        }

        result.push(matrix[i].join(''));
    }

    return result;
}
