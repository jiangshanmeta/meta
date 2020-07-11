/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;
    while(num){
        if(num&1){
            num--;
        }else{
            num >>= 1;
        }
        count++;
    }
    return count;
};