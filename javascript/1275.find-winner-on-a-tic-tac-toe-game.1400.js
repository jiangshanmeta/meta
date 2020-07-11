/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const matrix = [[],[],[]];
    for(let i=0;i<moves.length;i++){
        const [x,y] = moves[i];
        const char = i&1?'O':'X';
        matrix[x][y] = char;
    }
    if(isWin(matrix,'X')){
        return 'A';
    }
    if(isWin(matrix,'O')){
        return 'B';
    }
    if(moves.length<9){
        return 'Pending'
    }
    return 'Draw';
};

function isWin(matrix,char){
    for(let i=0;i<3;i++){
        if(matrix[i][0] === char && matrix[i][1] === char && matrix[i][2] === char){
            return true;
        }
    }
    for(let j=0;j<3;j++){
        if(matrix[0][j] === char && matrix[1][j] === char && matrix[2][j] === char){
            return true;
        }
    }
    if(matrix[0][0] === char && matrix[1][1] === char && matrix[2][2] === char){
        return true;
    }
    if(matrix[0][2] === char && matrix[1][1] === char && matrix[2][0] === char){
        return true;
    }
    return false;
}