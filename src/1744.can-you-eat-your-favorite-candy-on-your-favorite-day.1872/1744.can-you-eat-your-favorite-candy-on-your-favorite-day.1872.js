/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function(candiesCount, queries) {
    const prefixSum = new Array(candiesCount.length+1);
    prefixSum[0] = 0;
    for(let i=0;i<candiesCount.length;i++){
        prefixSum[i+1] = prefixSum[i]+candiesCount[i];
    }
    return queries.map(([
        favoriteType,
        favoriteDay,
        dailyCap,
    ])=>{
        const minVal = (favoriteDay+1);
        const maxVal = (favoriteDay+1)*dailyCap;
        const maxCandy = prefixSum[favoriteType+1];
        const minCandy = prefixSum[favoriteType]+1;
        if(minVal>maxCandy || maxVal<minCandy){
            return false;
        }
        return true
    })
};