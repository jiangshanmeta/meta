class NumMatrix {
    sums:number[][];
    constructor(matrix: number[][]) {
        const M = matrix.length;
        if(M === 0){
            this.sums = [[0]];
            return
        }
        const N = matrix[0].length;
        this.sums = new Array(M+1);
        this.sums[0] = new Array(N+1).fill(0);
        const horizontal:number[] = new Array(N).fill(0)
        for(let i=1;i<M+1;i++){
            this.sums[i] = new Array(N+1);
            this.sums[i][0] = 0;
            let left = 0;
            for(let j=0;j<N;j++){
                horizontal[j] += matrix[i-1][j];
                this.sums[i][j+1] = this.sums[i-1][j]+horizontal[j]+left;
                left += matrix[i-1][j];
            }
        }

    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        const sums = this.sums;
        return sums[row2+1][col2+1]+sums[row1][col1]-sums[row2+1][col1]-sums[row1][col2+1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */