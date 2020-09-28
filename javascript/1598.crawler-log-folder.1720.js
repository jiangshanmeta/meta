/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let result = 0;
    for(let i=0;i<logs.length;i++){
        const item = logs[i];
        if(item === '../'){
            if(result !== 0){
                result--;
            }
        }else if(item !== './'){
            result++;
        }
    }
    return result;
};