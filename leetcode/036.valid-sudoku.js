/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0;i<9;i++){
        const hashTable = {};
        for(let j=0;j<9;j++){
            const value = board[i][j];
            if(value === '.'){
                continue;
            }
            if(hashTable[value]){
                return false;
            }
            hashTable[value] = true;
        }
    }

    for(let j=0;j<9;j++){
        const hashTable = {};
        for(let i=0;i<9;i++){
            const value = board[i][j];
            if(value === '.'){
                continue;
            }
            if(hashTable[value]){
                return false;
            }
            hashTable[value] = true;
        }
    }
    
    for(let i=1;i<8;i+=3){
        for(let j=1;j<8;j+=3){
            const hashTable = {};
            for(let m=i-1;m<i+2;m++){
                for(let n=j-1;n<j+2;n++){
                    const value = board[m][n];
                    if(value === '.'){
                        continue;
                    }
                    if(hashTable[value]){
                        return false;
                    }
                    hashTable[value] = true;
                }
            }
            
        }
    }
    return true;
};