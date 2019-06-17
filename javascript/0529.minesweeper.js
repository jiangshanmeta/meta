/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
// 矩阵 DFS
var updateBoard = function(board, click) {
    if(board[click[0]][click[1]] === 'M'){
        board[click[0]][click[1]] = 'X';
        return board;
    }
    
    const maxX = board.length;
    const maxY = board[0].length;
    
    function getAdjacentInfo(board,x,y,sequence){
        if(x === -1 || x=== maxX || y === -1 || y===maxY){
            return 0;
        }
        if(board[x][y] === 'M'){
            return 1;
        }
        if(board[x][y] === 'E'){
            sequence.push(x,y);
        }
        return 0;
    }
    
    
    function dfs(board,x,y){
        let count = 0;
        const sequence = [];
        count += getAdjacentInfo(board,x-1,y-1,sequence);
        count += getAdjacentInfo(board,x-1,y,sequence);
        count += getAdjacentInfo(board,x-1,y+1,sequence);
        count += getAdjacentInfo(board,x,y-1,sequence);
        count += getAdjacentInfo(board,x,y+1,sequence);
        count += getAdjacentInfo(board,x+1,y-1,sequence);
        count += getAdjacentInfo(board,x+1,y,sequence);
        count += getAdjacentInfo(board,x+1,y+1,sequence);
        
        if(count === 0){
            board[x][y] = 'B';
            for(let i=0;i<sequence.length;i+=2){
                dfs(board,sequence[i],sequence[i+1]);   
            }
        }else{
            board[x][y] = count.toString();
        }
        
    }
    dfs(board,click[0],click[1]);
    return board;
};