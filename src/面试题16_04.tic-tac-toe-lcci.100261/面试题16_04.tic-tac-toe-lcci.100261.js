/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
    const N = board.length;
    if(N === 1){
        if(board[0][0] === ' '){
            return 'Pending'
        }else{
            return 'O'
        }
    }
    const colMatch = new Array(N).fill(true);
    let hasRest = false;
    for(let i=0;i<N;i++){
        let rowMatch = true;
        for(let j=0;j<N;j++){
            if(board[i][j] === ' '){
                hasRest = true;
                colMatch[j] = false;
                rowMatch = false;
                continue;
            }
            if(j>0 && rowMatch && board[i][j] !== board[i][0]){
                rowMatch = false;
            }
            if(i>0 && colMatch[j] && board[i][j] !== board[0][j]){
                colMatch[j] = false;
            }
        }

        if(rowMatch){
            return board[i][0];
        }
    }

    for(let j=0;j<N;j++){
        if(colMatch[j]){
            return board[0][j];
        }
    }
    let diagonal1 = board[0][0] !== ' ';
    let diagonal2 = board[0][N-1] !== ' ';
    for(let i=1;i<N;i++){
        if(diagonal1 && board[i][i] !== board[0][0]){
            diagonal1 = false;
        }
        if(diagonal2 && board[i][N-i-1] !== board[0][N-1]){
            diagonal2 = false;
        }
    }
    if(diagonal1){
        return board[0][0];
    }
    if(diagonal2){
        return board[0][N-1];
    }
    if(hasRest){
        return 'Pending'
    }
    return 'Draw'
};