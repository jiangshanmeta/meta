/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const L = grid.length;
    const rowMax = new Array(L).fill(0);
    const columnMax = new Array(L).fill(0);
    // 统计行列最大值
    for(let i=0;i<L;i++){
        for(let j=0;j<L;j++){
            const item = grid[i][j];
            if(item>rowMax[i]){
                rowMax[i] = item;
            }
            if(item>columnMax[j]){
                columnMax[j] = item;
            }
        }
    }
    
    let count = 0;
    for(let i=0;i<L;i++){
        for(let j=0;j<L;j++){
            // 能到的最高高度是该行该列的最小值
            count += (Math.min(rowMax[i],columnMax[j]) -grid[i][j] );
        }
    }
    
    return count;
};