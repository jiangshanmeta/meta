/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    const row = board.length;
    const column = board[0].length;
    
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(board[i][j] === '.'){
                continue;
            }
            count++;
            // 只能水平或者垂直排列
            for(let k=j+1;k<column;k++){
                if(board[i][k] === '.'){
                    break;
                }
                board[i][k] = '.';
            }
            for(let k=i+1;k<row;k++){
                if(board[k][j] === '.'){
                    break;
                }
                board[k][j] = '.';
            }
        }
    }
    
    return count;
};