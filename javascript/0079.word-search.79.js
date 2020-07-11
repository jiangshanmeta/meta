/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function backTracking(board,used,x,y,index){
        if(index === word.length){
            return true;
        }
        
        if(x<0 || x===used.length || y<0  || y===used[0].length || used[x][y] || board[x][y] !== word[index]){
            return false;
        }
        
        used[x][y] = true;
        
        const hasRst = backTracking(board,used,x-1,y,index+1) || backTracking(board,used,x,y+1,index+1) || backTracking(board,used,x+1,y,index+1) || backTracking(board,used,x,y-1,index+1);
        
        used[x][y] = false;
        
        return hasRst;
    }
    
    const used = board.map((arr)=>{
        return new Array(arr.length).fill(false);
    });
    
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(backTracking(board,used,x,y,0)){
                return true;
            }
        }
    }
    
    return false;
};