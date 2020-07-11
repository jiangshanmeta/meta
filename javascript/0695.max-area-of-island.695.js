/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let count;
    const maxX = grid.length-1;
    const maxY = grid[0].length-1;
    
    function dfs(grid,x,y){
        let count = 1;
        grid[x][y] = 0;
        if(x>0 &&grid[x-1][y] === 1   ){
            count += dfs(grid,x-1,y);
        }
        
        if(y<maxY  && grid[x][y+1] === 1 ){
            count += dfs(grid,x,y+1);
        }
        if(x<maxX && grid[x+1][y] === 1  ){
            count += dfs(grid,x+1,y);
        }
        if(y>0  && grid[x][y-1] === 1 ){
            count += dfs(grid,x,y-1);
        }
        
        return count;
    }
    
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                count = dfs(grid,i,j);
                if(count>max){
                    max = count;
                }
            }
        }
    }
    return max;
};