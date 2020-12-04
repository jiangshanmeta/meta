function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    const M = nums.length;
    const N = nums[0].length;
    if(M*N !== r*c){
        return nums;
    }
    const result:number[][] = [];
    for(let i=0;i<r;i++){
        result[i] = <number[]>new Array(c);
    }
    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            const index = i*N+j;
            const y = index%c;
            const x = (index-y)/c;
            result[x][y] = nums[i][j];
        }
    }
    return result
};