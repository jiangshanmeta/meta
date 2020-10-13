/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    for(let i=0;i<arr.length;i++){
        const left = i;
        const right = arr.length-i-1;
        result += arr[i]*( ((left>>1)+1)*((right>>1)+1) + ((left+1)>>1)*((right+1)>>1) );
    }
    return result;
};