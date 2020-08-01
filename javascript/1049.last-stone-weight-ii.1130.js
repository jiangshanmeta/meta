/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let last = [stones[0]];
    for(let i=1;i<stones.length;i++){
        const set = new Set();
        for(let j=0;j<last.length;j++){
            set.add(last[j]+stones[i]);
            set.add(last[j]-stones[i]);
        }
        last = [...set];
    }
    let result = Math.abs(last[0]);
    for(let i=1;i<last.length;i++){
        result = Math.min(result,Math.abs(last[i]))
    }
    return result;
};