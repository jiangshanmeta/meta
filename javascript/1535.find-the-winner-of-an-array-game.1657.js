/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    if(arr.length-1<=k){
        return Math.max(...arr);
    }
    let count = 0;
    let maxVal = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<maxVal){
            count++;
        }else{
            maxVal = arr[i];
            count = 1;
        }
        if(count === k){
            return maxVal;
        }
        
    }
    return maxVal;
};