/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ROW = matrix.length;
    if(ROW === 0){
        return [];
    }
    const COLUMN = matrix[0].length;
    const result = new Array(ROW*COLUMN);
    let index = 0;
    let i = 0;
    let j=0;
    // 一个while循环剥离一层
    while(i<ROW-i && j<COLUMN-j){
        // 上边
        for(let k=j;k<COLUMN-j;k++){
            result[index++] = matrix[i][k]
        }
        // 右边
        for(let k=i+1;k<ROW-i;k++){
            result[index++] = matrix[k][COLUMN-j-1];
        }
        // 判断是否只有一行，防止重复输出
        if(i !== ROW-i-1){
            // 下边
            for(let k=COLUMN-j-2;k>=j;k--){
                result[index++] = matrix[ROW-i-1][k];
            }
        }
        // 判断是否只有一列，防止重复输出
        if(j !== COLUMN-j-1){
            // 左边
            for(let k=ROW-j-2;k>i;k--){
                result[index++] = matrix[k][j];
            }
        }


        i++;
        j++;
    }

    return result;
};