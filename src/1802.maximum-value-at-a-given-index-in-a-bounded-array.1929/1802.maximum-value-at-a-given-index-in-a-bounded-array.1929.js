/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let result = 1;
    let low = 1;
    let high = maxSum;
    while(low<=high){
        const mid = low + ((high-low)>>1);
        let curSum = 0;
        const startIndex = index-(mid-1);
        if(startIndex<0){
            const n = index+1;
            curSum += n*mid+n*(1-n)/2;
        }else{
            curSum += startIndex+ (1+mid)*mid/2;
        }

        if(index !== n-1){
            const endIndex = index+mid-1;
            if(endIndex>n-1){
                const number = n-1-(index+1)+1;
                curSum += number*(mid-1)+number*(1-number)/2;
            }else{
                curSum += mid*(mid-1)/2 + n-1-(endIndex);
            }
        }
        
        if(curSum>maxSum){
            high = mid-1;
        }else{
            result = Math.max(result,mid);
            low = mid+1;
        }
    }
    return result;
};