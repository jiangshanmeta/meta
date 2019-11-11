/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const ROW = grid.length;
    const COLUMN = grid[0].length;
    // 先把边缘的0处理掉，这些都不符合要求
    for(let i=0;i<ROW;i++){
        fill(grid,i,0);
        fill(grid,i,COLUMN-1);
    }
    for(let j=0;j<COLUMN;j++){
        fill(grid,0,j);
        fill(grid,ROW-1,j);
    }
    // 剩下的都是内部的0了
    let result = 0;
    for(let i=0;i<ROW;i++){
        for(let j=0;j<COLUMN;j++){
            // 遇到一个0 ，计数，然后处理掉构成一个岛的所有0
            if(grid[i][j] === 0){
                result++;
                fill(grid,i,j);
            }
        }
    }
    return result;
};

// DFS 探索所有相邻的0
function fill(grid,x,y){
    if(x<0 || x>grid.length-1 || y<0 || y>grid[0].length-1 || grid[x][y] === 1){
        return ;
    }
    grid[x][y] = 1;
    fill(grid,x-1,y);
    fill(grid,x+1,y);
    fill(grid,x,y-1);
    fill(grid,x,y+1);
}