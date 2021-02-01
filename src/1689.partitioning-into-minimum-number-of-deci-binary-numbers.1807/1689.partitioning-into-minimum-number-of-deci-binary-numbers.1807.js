/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let result = 0;
    for(let i=0;i<n.length;i++){
        result = Math.max(result,+n[i]);
    }
    return result
};