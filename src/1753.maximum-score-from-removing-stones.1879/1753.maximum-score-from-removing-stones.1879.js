/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    const list = [a,b,c].sort((a,b)=>a-b);
    let result = 0;
    if(list[0]+list[1]>list[2]){
        const step = Math.min(list[0],(list[0]+list[1]-list[2]+1)>>1);
        result += step;
        list[0] -= step;
        list[1] -= step;
    }
    
    result += list[0];
    result += list[1];
    return result;
};