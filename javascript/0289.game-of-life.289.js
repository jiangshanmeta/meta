/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 根据题意老老实实算呗 
const deltas = [
  [-1,-1],
  [-1,0],
  [-1,1],
  [0,-1],
  [0,1],
  [1,-1],
  [1,0],
  [1,1],
];

function countNeighbor(x,y,board){
    let liveCount = 0;
    let deadCount = 0;
    for(let i=0;i<deltas.length;i++){
        if(x+deltas[i][0] === -1 || 
           x+deltas[i][0] === board.length ||
           y+deltas[i][1] === -1 ||
           y+deltas[i][1] === board[0].length
        ){
            continue;
        }
        if(board[x+deltas[i][0]][y+deltas[i][1]] === 1){
            liveCount++;
        }else{
            deadCount++;
        }
    }
    return [liveCount,deadCount];
}


var gameOfLife = function(board) {
    const row = board.length;
    const column = board[0].length;
    let lastRowResult = new Array(column);
    for(let i=0;i<row;i++){
        let arr = new Array(column).fill(0);
        for(let j=0;j<column;j++){
            const [liveCount,deadCount] = countNeighbor(i,j,board);
            if(board[i][j] === 1){
                if(liveCount === 2 || liveCount===3){
                    arr[j] = 1;
                }
            }else if(liveCount===3){
                arr[j] = 1;
            }
        }
        if(i>0){
            for(let j=0;j<lastRowResult.length;j++){
                board[i-1][j] = lastRowResult[j];
            }
        }
        lastRowResult = arr;
    }
    for(let j=0;j<lastRowResult.length;j++){
        board[row-1][j] = lastRowResult[j];
    }
};