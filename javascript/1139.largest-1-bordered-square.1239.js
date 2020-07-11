/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    let length = 0;
    const X = grid.length;
    const Y = grid[0].length;
    for(let i=0;i<X;i++){
        for(let j=0;j<Y;j++){
            if(grid[i][j] === 0){
                continue;
            }
            // 以(i,j)为左上角看能构成的正方形
            // 找到最大的边界
            let endi = i+1;
            while(endi<X && grid[endi][j] === 1){
                endi++;
            }
            let endj = j+1;
            while(endj<Y && grid[i][endj] === 1){
                endj++;
            }
            let tryMaxL = Math.min(endi-i,endj-j);
            while(tryMaxL>0){
                // 看另外两个边是否全为1
                let flag = true;
                for(let k=j+1;k<j+tryMaxL;k++){
                    if(grid[i+tryMaxL-1][k] === 0){
                        flag = false;
                        break;
                    }
                }
                for(let k=i+1;k<i+tryMaxL;k++){
                    if(grid[k][j+tryMaxL-1] === 0){
                        flag = false;
                        break;
                    }
                }
                // 全为1 不需要看更小的了
                if(flag){
                    length = Math.max(length,tryMaxL);
                    break;
                }
                tryMaxL--;
            }
        }
    }
    return length ** 2;
};