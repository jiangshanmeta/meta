/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(low%2 === 0){
        low++;
    }
    if(high%2 === 0){
        high--;
    }
    if(low>high){
        return 0;
    }
    return (high-low)/2+1;
};