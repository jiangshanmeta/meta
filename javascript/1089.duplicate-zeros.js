/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let lastToIndex = -1;
    // toIndexs中每一项是转换后新的开始索引
    const toIndexs = [];
    for(let i=0;i<arr.length;i++){
        toIndexs.push(++lastToIndex);
        if(arr[i] === 0){
            lastToIndex++;
        }
        if(lastToIndex >= arr.length-1){
            break;
        }
    }
    while(toIndexs.length){
        const toIndex = toIndexs.pop();
        if(arr[toIndexs.length] === 0 && toIndex+1<arr.length){
            arr[toIndex+1] = 0
        }
        arr[toIndex] = arr[toIndexs.length];
    }
};