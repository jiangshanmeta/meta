/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    // rightMax 到目前为止的最大值
    let rightMax = arr[arr.length-1];
    for(let i=arr.length-2;i>-1;i--){
        const node = arr[i];
        arr[i] = rightMax;
        rightMax = Math.max(node,rightMax);
    }
    arr[arr.length-1] = -1;
    return arr;
};