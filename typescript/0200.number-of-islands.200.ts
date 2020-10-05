function numIslands(grid: string[][]): number {
    const M = grid.length;
    if(M === 0){
        return 0;
    }
    let result:number = 0;
    const N = grid[0].length;
    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            if(grid[i][j] === '1'){
                result++;
                dfs(grid,i,j);
            }
        }
    }
    return result;
};

function dfs(grid:string[][],x:number,y:number){
    if(x<0 || y<0 || x === grid.length || y === grid[0].length || grid[x][y] === '0'){
        return;
    }
    grid[x][y] = '0';
    dfs(grid,x-1,y);
    dfs(grid,x+1,y);
    dfs(grid,x,y-1);
    dfs(grid,x,y+1);
}