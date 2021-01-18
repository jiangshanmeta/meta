function transpose(A: number[][]): number[][] {
    const M = A.length;
    const N = A[0].length;
    const result:number[][] = new Array(N);
    for(let i=0;i<N;i++){
        result[i] = new Array(M);
        for(let j=0;j<M;j++){
            result[i][j] = A[j][i]
        }
    }

    return result;
};