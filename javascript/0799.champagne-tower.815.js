/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
// 动态规划
// 类似杨辉三角
var champagneTower = function(poured, query_row, query_glass) {
    const tower = [
        [poured],
    ];
    for(let i=1;i<query_row+1;i++){
        const lastRow = tower[i-1];
        const newRow = new Array(i+1).fill(0);
        let hasMore = false;
        for(let j=0;j<i+1;j++){
            if(j>0 && lastRow[j-1]>1){
                newRow[j] += (lastRow[j-1]-1)/2;
            }
            if(j<lastRow.length && lastRow[j]>1){
                newRow[j] += (lastRow[j]-1)/2;
            }
            if(newRow[j]>1){
                hasMore = true;
            }
        }
        tower[i] = newRow;
        if(!hasMore){
            break;
        }
    }

    if(query_row>tower.length-1){
        return 0;
    }
    return tower[query_row][query_glass]>1?1:tower[query_row][query_glass];
};