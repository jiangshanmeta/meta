/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const result = new Array(dominoes.length).fill(".");
    
    let index = 0;
    while(index<dominoes.length){
        if(dominoes[index] !== '.'){
            break;
        }
        index++;
    }
    
    if(index === dominoes.length){
        return dominoes;
    }
    
    result[index] = dominoes[index];
    if(dominoes[index] === 'L'){
        for(let i=0;i<index;i++){
            result[i] = 'L';
        }
    }
    

    let nextIndex = index+1;
    while(nextIndex<dominoes.length){
        const nextIndexChar = dominoes[nextIndex];
        if(nextIndexChar !== '.'){
            result[nextIndex] = nextIndexChar;
            if(dominoes[index] === 'R' && nextIndexChar === 'L'){
                let leftIndex = index+1;
                let rightIndex = nextIndex-1;
                while(leftIndex<rightIndex){
                    result[leftIndex] = 'R';
                    result[rightIndex] = 'L';
                    leftIndex++;
                    rightIndex--;
                }
                
            }else if(dominoes[index] === 'R' && nextIndexChar === 'R'){
                for(let i=index+1;i<nextIndex;i++){
                    result[i] = 'R';
                }
            }else if(dominoes[index] === 'L' && nextIndexChar === 'L'){
                for(let i=index+1;i<nextIndex;i++){
                    result[i] = 'L';
                }
            }
            index = nextIndex;
        }
        
        nextIndex++;

    }

    if(dominoes[index] === 'R'){
        for(let i=index+1;i<dominoes.length;i++){
            result[i] = 'R';
        }
    }
    
    return result.join("");
};