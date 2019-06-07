/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let val = grid[i][j];
            if(val === 0){
                continue;
            }
       
            if(grid[i][j] === 1){ 
                val = 4;
            }
            
            if(j<grid[0].length-1 && grid[i][j+1] > 0){
                val--;
                grid[i][j+1] = grid[i][j+1] === 1?3:2;
            }
            
            if(i<grid.length-1 && grid[i+1][j] === 1){
                val--;
                grid[i+1][j] = 3;
            }
            count += val;
            
        }
    }
    return count;
};