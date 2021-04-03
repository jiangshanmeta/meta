/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
    let result = 0;
    coins.sort((a,b)=>a-b);
    for(let i=0;i<coins.length;i++){
        if(result<coins[i]-1){
            break;
        }
        result += coins[i];
    }
    return result+1;
};