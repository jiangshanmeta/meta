function matrixScore(A: number[][]): number {
    const M = A.length;
    const N = A[0].length;
    for(let i=0;i<M;i++){
        if(A[i][0] === 1){
            continue;
        }
        for(let j=0;j<N;j++){
            A[i][j] ^= 1;
        }
    }
    const half = M>>1;

    for(let j=1;j<N;j++){
        let count = 0;
        for(let i=0;i<M;i++){
            if(A[i][j] === 0){
                count++;
            }
        }
        if(count>half){
            for(let i=0;i<M;i++){
                A[i][j] ^= 1;
            }
        }
    }

    let result = 0;
    for(let i=0;i<M;i++){
        let num = 1;
        for(let j=1;j<N;j++){
            num <<= 1;
            num += A[i][j];
        }
        result += num;
    }
    return result;
};