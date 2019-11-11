/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    // 时间复杂度O(mn) 空间复杂度O(m+n)
    // row[i] column[j]记录这一行或者这一列被增加的次数
    const row = new Array(n).fill(0);
    const column = new Array(m).fill(0);
    for(let i=0;i<indices.length;i++){
        row[indices[i][0]]++;
        column[indices[i][1]]++;
    }
    let result = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            // 确定 i j对应位置是奇偶性
            if( (row[i]+column[j])&1 ){
                result++;
            }
        }
    }
    return result;
};