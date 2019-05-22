/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    const maxX = A.length;
    const half = maxX/2;
    const maxY = A[0].length;
    // 每一行第一个元素调整为1
    for(let i=0;i<maxX;i++){
        if(A[i][0] === 0){
            for(let j=0;j<maxY;j++){
                // 利用异或0 1 互换
                A[i][j] = A[i][j]^1;
            }
        }
    }
    
    // 每一列进行调整
    for(let j=0;j<maxY;j++){
        let count = 0;
        for(let i=0;i<maxX;i++){
            A[i][j] === 1 && count++;
        }
        // 1的个数不到一半时列变换
        if(count<half){
            for(let i=0;i<maxX;i++){
                A[i][j] = A[i][j]^1;
            }
        }
    }
    // 求和
    let sum = 0;
    for(let j=0;j<maxY;j++){
        let column = 0;
        for(let i=0;i<maxX;i++){
            column += A[i][j];
        }
        sum = sum*2 + column;
    }
    return sum;
};