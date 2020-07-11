/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1){
        return 1;
    }else if(n === 2){
        return 2;
    }
    let a = 1;
    let b = 2;
    let index = 2;
    while(index++<n){
        let tmp = a + b;
        a = b;
        b = tmp;
    }
    return b;
};