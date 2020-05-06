/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const MAX = Math.max(...candies);
    const result = new Array(candies.length);
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies<MAX){
            result[i] = false;
        }else{
            result[i] = true;
        }
    }
    return result;
};