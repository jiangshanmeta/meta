/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// BFS
var openLock = function(deadends, target) {
    const deadMap = {};
    for(let i=0;i<deadends.length;i++){
        deadMap[deadends[i]] = true;
    }
    if(deadMap['0000'] || deadends[target]){
        return -1;
    }

    const usedMap = {'0000':true};
    let sequence = ['0000'];
    let result = 0;
    while(true){
        if(sequence.length === 0){
            return -1;
        }
        
        const nextSequence = [];
        for(let i=0;i<sequence.length;i++){
            if(sequence[i] === target){
                return result;
            }
            const num = sequence[i];
            for(let j=0;j<4;j++){
                // 构造相邻接点
                let prefix = num.substring(0,j);
                let suffix = num.substring(j+1);
                const digit = +num[j];
                
                const num1 = `${prefix}${digit===9?'0':digit+1}${suffix}`;
                const num2 = `${prefix}${digit===0?'9':digit-1}${suffix}`;
                
                if(!usedMap[num1] && !deadMap[num1]){
                    usedMap[num1] = true;
                    nextSequence.push(num1);
                }
                
                if(!usedMap[num2] && !deadMap[num2]){
                    usedMap[num2] = true;
                    nextSequence.push(num2);
                }
            }
        }
        
        sequence = nextSequence;
        
        result++;
    }
    

};