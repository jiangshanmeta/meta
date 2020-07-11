/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    const stackX = [0];
    const stackY = [0];
    const canReachs = new Array(M);
    for(let i=0;i<M;i++){
        canReachs[i] = new Array(N).fill(false);
    }
    canReachs[0][0] = true;
    while(stackX.length){
        const x = stackX.pop();
        const y = stackY.pop();
        let nextX1;
        let nextX2;
        let nextY1;
        let nextY2;
        if(grid[x][y] === 1){
            if(judgeCanPush(x,y+1,3)){
                stackX.push(x);
                stackY.push(y+1);
                canReachs[x][y+1] = true;
            }
            if(judgeCanPush(x,y-1,2)){
                stackX.push(x);
                stackY.push(y-1);
                canReachs[x][y-1] = true;
            }
        }else if(grid[x][y] === 2){
            if(judgeCanPush(x-1,y,4)){
                stackX.push(x-1);
                stackY.push(y);
                canReachs[x-1][y] = true;
            }
            if(judgeCanPush(x+1,y,1)){
                stackX.push(x+1);
                stackY.push(y);
                canReachs[x+1][y] = true;
            }
        }else if(grid[x][y] === 3){
            if(judgeCanPush(x,y-1,2)){
                stackX.push(x);
                stackY.push(y-1);
                canReachs[x][y-1] = true;
            }
            if(judgeCanPush(x+1,y,1)){
                stackX.push(x+1);
                stackY.push(y);
                canReachs[x+1][y] = true;
            }
            
        }else if(grid[x][y] === 4){
            if(judgeCanPush(x,y+1,3)){
                stackX.push(x);
                stackY.push(y+1);
                canReachs[x][y+1] = true;
            }
            if(judgeCanPush(x+1,y,1)){
                stackX.push(x+1);
                stackY.push(y);
                canReachs[x+1][y] = true;
            }
        }else if(grid[x][y] === 5){
            if(judgeCanPush(x-1,y,4)){
                stackX.push(x-1);
                stackY.push(y);
                canReachs[x-1][y] = true;
            }
            if(judgeCanPush(x,y-1,2)){
                stackX.push(x);
                stackY.push(y-1);
                canReachs[x][y-1] = true;
            }
        }else if(grid[x][y] === 6){
            if(judgeCanPush(x-1,y,4)){
                stackX.push(x-1);
                stackY.push(y);
                canReachs[x-1][y] = true;
            }
            if(judgeCanPush(x,y+1,3)){
                stackX.push(x);
                stackY.push(y+1);
                canReachs[x][y+1] = true;
            }
        }
    }
    //  dir 1=>从上 2=>从右 3=>从左 4=>从下
    function judgeCanPush(x,y,dir){
        if(x<0 || y<0 || x === M || y === N || canReachs[x][y]){
            return false;
        }
        switch(grid[x][y]){
            case 1:
                return dir === 2 || dir === 3;
            case 2:
                return dir === 1 || dir === 4;
            case 3:
                return dir === 3 || dir === 4;
            case 4:
                return dir === 2 || dir === 4;
            case 5:
                return dir === 3 || dir === 1;
            case 6:
                return dir === 1 || dir === 2;  
        }
    }
    
    
    return canReachs[M-1][N-1];
};