function kthLargestValue(matrix: number[][], k: number): number {
    const M = matrix.length;
    const N = matrix[0].length;
    const vertical:number[] = new Array(N).fill(0);
    const row:number[] = new Array(N).fill(0);
    const candidates:number[] = [];
    for(let i=0;i<M;i++){
        vertical[0] ^= matrix[i][0];
        row[0] = vertical[0];
        candidates.push(row[0])
        for(let j=1;j<N;j++){
            vertical[j] ^= matrix[i][j];
            row[j] = row[j-1]^vertical[j];
            candidates.push(row[j]);    
        }
    }
    return candidates.sort((a,b)=>b-a)[k-1]
};