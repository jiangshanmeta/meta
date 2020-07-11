/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const rangeSum = [0];
    for(let i=0;i<stoneValue.length;i++){
        rangeSum[i+1] = rangeSum[i]+stoneValue[i];
    }
    const cache = new Array(stoneValue.length).fill(-Infinity);
    // 计算在index及之后 另一个人选了之后能获得的最大值
    function helper(index){
        if(index === stoneValue.length){
            return 0;
        }
        return rangeSum[stoneValue.length]-rangeSum[index]-cache[index];
    }

    for(let i=stoneValue.length-1;i>-1;i--){
        cache[i] = Math.max(cache[i],stoneValue[i]+helper(i+1));
        if(i+1<stoneValue.length){
            cache[i] = Math.max(cache[i],stoneValue[i]+stoneValue[i+1]+helper(i+2));

        }
        if(i+2<stoneValue.length){
            cache[i] = Math.max(cache[i],stoneValue[i]+stoneValue[i+1]+stoneValue[i+2]+helper(i+3));
        }
    }
    const AValue = cache[0];
    const BValue = rangeSum[rangeSum.length-1]-AValue;
    if(AValue>BValue){
        return "Alice"
    }else if(AValue<BValue){
        return "Bob"
    }else{
        return "Tie"
    }
    
};