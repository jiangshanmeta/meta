/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */

// 类似于backTracking类问题
var numsSameConsecDiff = function(N, K) {
    
    const map = {};
    for(let i=0;i<10;i++){
        const item = [];
        if(K === 0){
            item[0] = i;
            map[i] = item;
            continue;
        }
        i+K<10 && item.push(i+K);
        i-K>-1 && item.push(i-K);
        if(item.length){
            map[i] = item;
        }
    }

    function backTracking(sequence,number,map,digitCount,digit){
        if(digitCount === N){
            return sequence.push(number);
        }
        if(map[digit]){
            for(let i=0;i<map[digit].length;i++){
                backTracking(sequence,number*10+map[digit][i],map,digitCount+1,map[digit][i]);       
            }
        }
    }
    const result = [];
    for(let i=N===1?0:1;i<10;i++){
        backTracking(result,i,map,1,i);    
    }
    return result;
};