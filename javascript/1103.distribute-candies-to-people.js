/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// 暴力做的
var distributeCandies = function(candies, num_people) {
    const result = new Array(num_people).fill(0);
    let item = 1;
    let index = 0;    
    while(candies>0){
        const consume = Math.min(item++,candies);
        result[index] += consume;
        candies -= consume;
        index = (index+1)%num_people;
    }
    return result;
};