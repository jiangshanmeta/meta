/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length === 0){
        return 0;
    }
    const maxX = grid.length -1;
    const maxY = grid[0].length -1;
    function dfs(grid,x,y){
        grid[x][y] = 0;
        if(x>0 && grid[x-1][y] === '1'){
            dfs(grid,x-1,y);
        }
        
        if(y<maxY && grid[x][y+1] === '1'){
            dfs(grid,x,y+1);
        }
        
        if(x<maxX && grid[x+1][y] === '1'){
            dfs(grid,x+1,y);
        }
        
        if(y>0 && grid[x][y-1] === '1'){
            dfs(grid,x,y-1);
        }
        
        
    }
    let count = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === '1'){
                count++;
                dfs(grid,i,j);
            }
        }
    }
    return count;
};