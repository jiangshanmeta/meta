/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    if(grid.length === 0){
        return 0;
    }
    const row = grid.length;
    const column = grid[0].length;
    const yArr = new Array(column).fill(0);
    let z = 0;
    let x = 0;
    
    for(let i=0;i<row;i++){
        let rowMax = 0;
        for(let j=0;j<column;j++){
            const item = grid[i][j];
            if(item>0){
                z++;
                if(item>rowMax){
                    rowMax = item;
                }
                if(item>yArr[j]){
                    yArr[j] = item;
                }
            }
        }
        x += rowMax;
    }
    
    let y = 0;
    for(let i=0;i<column;i++){
        y += yArr[i];
    }
    
    return x+y+z;
};