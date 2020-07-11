/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
// 有点像leetcode 189 只是映射为二维的
var shiftGrid = function(grid, k) {
    const ROW = grid.length;
    const COLUMN = grid[0].length;
    k %= ROW*COLUMN;
    if(k === 0){
        return grid;
    }

    reverse(grid,0,ROW*COLUMN-k-1,COLUMN);
    reverse(grid,ROW*COLUMN-k,ROW*COLUMN-1,COLUMN)
    reverse(grid,0,ROW*COLUMN-1,COLUMN);
    
    return grid;
};
// 二维的旋转
function reverse(grid,left,right,COLUMN){
    while(left<right){
        const lefty = left%COLUMN;
        const leftx = (left-lefty)/COLUMN;
        const righty = right%COLUMN;
        const rightx = (right-righty)/COLUMN;
        const tmp = grid[rightx][righty];
        grid[rightx][righty] = grid[leftx][lefty];
        grid[leftx][lefty] = tmp;
        left++;
        right--;
    }
}