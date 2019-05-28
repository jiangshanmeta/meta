/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // counts[i]表示时间%60为i的个数
    const counts = new Array(60).fill(0);
    for(let i=0;i<time.length;i++){
        counts[time[i]%60]++;
    }
    let result = 0;
    for(let i=0;i<31;i++){
        if(counts[i] === 0){
            continue;
        }
        const restCount = counts[(60-i)%60];
        if(restCount === 0){
            continue;
        }
        if(i === 0 || i === 30){
            result += restCount*(restCount-1)/2;
        }else{
            result += counts[i]*restCount;
        }
        
    }
    return result;
};