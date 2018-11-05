/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const arr = num.toString().split("");
    for(let i=0;i<arr.length;i++){
        let max = arr[i];
        let maxIndex;
        // 找到后边比arr[i]大的数中最大的那个的出现的最后的位置
        for(let j=arr.length-1;j>i;j--){
            if(arr[j]>max){
                maxIndex = j;
                max = arr[j];
            }
        }
        if(maxIndex !== undefined){
            arr[maxIndex] = arr[i];
            arr[i] = max;
            break;
        }
    }
    return +arr.join("");
};