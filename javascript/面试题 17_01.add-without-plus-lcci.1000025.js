/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    return helper(a>>>0,b>>>0) >> 0;
};

function helper(a,b){
    if(a === 0){
        return b;
    }
    if(b === 0){
        return a;
    }
    return helper(a^b,(a&b)<<1);
}