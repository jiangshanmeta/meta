/**
 * @param {number[][]} grid
 * @return {number}
 */
// 暴力算 
function isMagicSquare(grid,x,y){
    const set = {};
    const row = new Array(3).fill(0);
    const column = new Array(3).fill(0);
    
    for(let i=-1;i<2;i++){
        for(let j=-1;j<2;j++){
            const item = grid[x+i][y+j];
            if(item>9 || set[item] || item === 0 ){
                return false;
            }
            set[item] = true;
            row[i+1] += item;
            column[j+1] += item;
        }
    }
    
    if(row[0] === row[1] && row[1] === row[2] && column[0] === column[1] && column[1] === column[2] && row[0] === column[0]){
        let diagonal1 = grid[x-1][y-1] + grid[x][y] + grid[x+1][y+1];
        let diagonal2 = grid[x-1][y+1] + grid[x][y] + grid[x+1][y-1];
        return diagonal1 === diagonal2 && diagonal1 === row[0];
    }
    return false;
}


var numMagicSquaresInside = function(grid) {
    let count = 0;
    for(let i=1;i<grid.length-1;i++){
        for(let j=1;j<grid[0].length-1;j++){
            isMagicSquare(grid,i,j) && count++;
        }
    }
    return count;
};