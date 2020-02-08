/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    // 滑动窗口
    const subarrMinSum = k*threshold;
    let winSum = 0;
    for(let i=0;i<k-1;i++){
        winSum += arr[i];
    }
    let result = 0;
    for(let i=k-1;i<arr.length;i++){
        winSum += arr[i];
        if(winSum>=subarrMinSum){
            result++;
        }
        
        winSum -= arr[i-k+1];
    }
    return result
};