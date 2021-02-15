function countNegatives(grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    let result = 0;
    let x = 0;
    let y = N-1;
    while(x<M && y>-1){
        if(grid[x][y]<0){
            result += M-x;
            y--;
        }else{
            x++;
        }
    }
    return result
};