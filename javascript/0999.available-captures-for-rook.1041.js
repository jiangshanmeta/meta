/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const N = board.length;
    let rx;
    let ry;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(board[i][j] === 'R'){
                rx = i;
                ry = j;
                break;
            }
        }
    }
    
    let result = 0;
    for(let i=rx-1;i>-1;i--){
        if(board[i][ry] === 'B'){
            break;
        }
        if(board[i][ry] === 'p'){
            result++;
            break;
        }
    }
    
    for(let i=rx+1;i<N;i++){
        if(board[i][ry] === 'B'){
            break;
        }
        if(board[i][ry] === 'p'){
            result++;
            break;
        }
    }
    
    for(let i=ry-1;i>-1;i--){
        if(board[rx][i] === 'B'){
            break;
        }
        if(board[rx][i] === 'p'){
            result++;
            break;
        }
    }
    
    for(let i=ry+1;i<N;i++){
        if(board[rx][i] === 'B'){
            break;
        }
        if(board[rx][i] === 'p'){
            result++;
            break;
        }
    }
    
    return result;
};