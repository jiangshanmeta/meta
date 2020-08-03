/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let result = 0;
    let empty = 0;
    while(numBottles>0){
        result += numBottles;
        empty += numBottles;
        const mod = empty%numExchange;
        numBottles = (empty-mod)/numExchange;
        empty = mod;
    }
    return result;
};