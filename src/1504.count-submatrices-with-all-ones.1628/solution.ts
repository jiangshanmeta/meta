function numSubmat (mat: number[][]): number {
    const M = mat.length;
    const N = mat[0].length;
    const cols = new Array<number>(N).fill(0);
    let result = 0;
    for (let i = 0; i < M; i++) {
        let left = 0;
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 0) {
                left = 0;
                cols[j] = 0;
            } else {
                cols[j]++;
                let max = cols[j];
                for (let k = j; k >= j - left; k--) {
                    max = Math.min(max, cols[k]);
                    result += max;
                }
                left++;
            }
        }
    }
    return result;
}

function numSubmat2(mat: number[][]): number {
    const M = mat.length;
    const N = mat[0].length;
    const cols = new Array<number>(N).fill(0);
    let result = 0;
    for(let i =0;i<M;i++){
        const stack:number[] = [];
        const sums:number[] = [];
        for(let j=0;j<N;j++){
            if(mat[i][j] === 0){
                cols[j] = 0;
            }else{
                cols[j]++;
            }
            while(stack.length && cols[stack[stack.length-1]] >= cols[j]){
                stack.pop();
                sums.pop();
            }
            const last = sums.length>0? sums[sums.length-1]:0;
            const index = stack.length>0? stack[stack.length-1]:-1;
            const sum = last+ (j-index)*cols[j] 
            sums.push(sum);
            stack.push(j);
            result += sum;
        }
    }
    return result
};