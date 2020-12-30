/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if(n === 0){
        return 0;
    }
    const result = new Array(n+1);
    result[0] = 0;
    result[1] = 1;
    for(let i=2;i<result.length;i++){
        const half = i>>1;
        if(i&1){
            result[i] = result[half]+result[half+1];
        }else{
            result[i] = result[half];
        }
    }
    return Math.max(...result)
};