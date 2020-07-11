/**
 * @param {string[]} board
 * @return {boolean}
 */
function isSuccess(char,board){
    return (
        (board[0][0] === char && board[0][1] === char && board[0][2] === char) ||
        (board[1][0] === char && board[1][1] === char && board[1][2] === char) ||
        (board[2][0] === char && board[2][1] === char && board[2][2] === char) ||
        (board[0][0] === char && board[1][0] === char && board[2][0] === char) ||
        (board[0][1] === char && board[1][1] === char && board[2][1] === char) ||
        (board[0][2] === char && board[1][2] === char && board[2][2] === char) ||
        (board[0][0] === char && board[1][1] === char && board[2][2] === char) ||
        (board[0][2] === char && board[1][1] === char && board[2][0] === char)
    );
}

var validTicTacToe = function(board) {
    // 统计X O数量
    let xCount = 0;
    let oCount = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j] === "X"){
                xCount++;
            }else if(board[i][j] === "O"){
                oCount++;
            }
        }
    }
    // 两者数量相同 或者 X数量多一个
    const delta = xCount-oCount;
    if(delta>1 || delta<0){
        return false;
    }
    
    if(isSuccess("X",board)){
        return delta===1;
    }else if(isSuccess("O",board)){
        return delta === 0;
    }
    return true;
};