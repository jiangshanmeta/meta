/**
 * @param {number[]} arr
 * @return {number}
 */
// In some array arr, the values were in arithmetic progression: the values arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.
// Then, a value from arr was removed that was not the first or last value in the array.
// Return the removed value.
var missingNumber = function(arr) {
    // 计算出等差数列的公差
    const delta = (arr[arr.length-1] - arr[0])/arr.length;
    if(delta === 0){
        return arr[0];
    }
    let low = 0;
    let high = arr.length-1;
    // index是被删除元素的前一个元素的索引
    let index = 0;
    while(low<=high){
        const mid = (low+high) >> 1;
        // mid元素应该在这里 所以更新索引
        if(arr[mid] === arr[0]+mid*delta){
            index = Math.max(index,mid);
            low = mid+1;
        }else{
            // 被删除元素之后的元素了
            high = mid-1;
        }
    }
    return arr[index]+delta;
};