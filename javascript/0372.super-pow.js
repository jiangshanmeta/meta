/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    a %= 1337;
    let result = 1;
    for(let i=0;i<b.length;i++){
        result = pow(result,10)*pow(a,b[i])%1337;
    }
    return result;
};

function pow(a,b){
    let result = 1;
    while(b){
        if(b&1){
            result = result*a%1337;
        }
        b >>= 1;
        a = a*a%1337;
    }
    return result%1337;
}