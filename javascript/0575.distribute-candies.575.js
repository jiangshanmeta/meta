// 水题
// 能分到的最大种类是 Math.min(糖的种类,糖的数量/2)

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const half = candies.length/2;
    const candyTypeSet = new Set();

    for(let i=0;i<candies.length;i++){
        candyTypeSet.add(candies[i]);
        if(candyTypeSet.size === half){
            return half
        }
    }
    return candyTypeSet.size;
};