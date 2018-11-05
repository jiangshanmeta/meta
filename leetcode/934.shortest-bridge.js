/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
    const row = A.length;
    const column = A[0].length;
    let fillVal = -1;
    let firstIsland = [];
    // 水被重新标记为Infinity 第一个岛标记为-1 第二个岛标记为-2
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(A[i][j] === 0){
                A[i][j] = Infinity;
                continue;
            }
            if(A[i][j] === 1){
                const queue = [i,j];
                A[i][j] = fillVal;
                // BSF标记本岛
                fillVal === -1 && firstIsland.push(i,j);
                while(queue.length){
                    const x = queue.shift();
                    const y = queue.shift();
                    if(x>0 && A[x-1][y] === 1){
                        A[x-1][y] = fillVal;
                        queue.push(x-1,y);
                        fillVal === -1 && firstIsland.push(x-1,y);
                    }
                    if(x<row-1 && A[x+1][y] === 1){
                        A[x+1][y] = fillVal;
                        queue.push(x+1,y)
                        fillVal === -1 && firstIsland.push(x+1,y);
                    }
                    if(y>0 && A[x][y-1] === 1){
                        A[x][y-1] = fillVal;
                        queue.push(x,y-1);
                        fillVal === -1 && firstIsland.push(x,y-1);
                    }
                    if(y<column-1 && A[x][y+1] === 1){
                        A[x][y+1] = fillVal;
                        queue.push(x,y+1);
                        fillVal === -1 && firstIsland.push(x,y+1);
                    }
                }
                fillVal--;
            }
        }
    }
    
    const waterNodes = [];
    // 找到第一个岛周边节点
    while(firstIsland.length){
        const x = firstIsland.shift();
        const y = firstIsland.shift();
        if(x>0 && A[x-1][y] === Infinity){
            A[x-1][y] = 1;
            waterNodes.push(x-1,y);
        }
        if(x<row-1 && A[x+1][y] === Infinity){
            A[x+1][y] = 1;
            waterNodes.push(x+1,y);
        }
        if(y>0 && A[x][y-1] === Infinity){
            A[x][y-1] = 1;
            waterNodes.push(x,y-1);
        }
        if(y<column-1 && A[x][y+1] === Infinity){
            A[x][y+1] = 1;
            waterNodes.push(x,y+1);
        }
    }
    // BSF向外扩张找第二个岛
    while(waterNodes.length){
        const x = waterNodes.shift();
        const y = waterNodes.shift();
        const curDis = A[x][y];
        if(x>0){
            if(A[x-1][y] === -2){
                return curDis;
            }
            if(curDis+1<A[x-1][y]){
                A[x-1][y] = curDis+1;
                waterNodes.push(x-1,y);
            }
        }
        if(x<row-1){
            if(A[x+1][y] === -2){
                return curDis;
            }
            if(curDis+1<A[x+1][y]){
                A[x+1][y] = curDis+1;
                waterNodes.push(x+1,y);
            }
        }
        if(y>0){
            if(A[x][y-1] === -2){
                return curDis;
            }
            if(curDis+1<A[x][y-1]){
                A[x][y-1] = curDis+1;
                waterNodes.push(x,y-1);
            }
        }
        if(y<column-1){
            if(A[x][y+1] === -2){
                return curDis;
            }
            if(curDis+1<A[x][y+1]){
                A[x][y+1] = curDis+1;
                waterNodes.push(x,y+1);
            }
        }
    }
    
};