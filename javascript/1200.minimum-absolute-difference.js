/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // 排好序 差值的最小值仅需考虑两个相邻的元素
    arr.sort((a,b)=>a-b);
    let minDiff = Infinity;
    let result = [];
    for(let i=0;i<arr.length-1;i++){
        const diff = arr[i+1]-arr[i];
        if(diff<minDiff){
            minDiff = diff;
            result = [[arr[i],arr[i+1]]];
        }else if(diff === minDiff){
            result.push([arr[i],arr[i+1]]);
        }
    }
    return result;
};