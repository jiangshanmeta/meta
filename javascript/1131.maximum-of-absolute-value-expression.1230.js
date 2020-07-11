/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
// |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
// 即 (|arr1[i] - arr1[j]| + |i-j|/2 ) + (|arr2[i] - arr2[j]| + |i-j|/2 )
// 只看一半并令i<j
// |arr[i]-arr[j]| + (j-i)/2
// 取最大值时若 arr[i]>=arr[j]
//  (j/2-arr[j]) - (i/2-arr[i])
// 若arr[i]<arr[j]
// (arr[j]+j/2) - (arr[i]+i/2)
// 把括号内的看为整体 就得到 arr11 arr12 arr21 arr22
// 两个一半合起来 对应 merge1-4
// 然后找 i<j merge[j]-merge[i]最大值

var maxAbsValExpr = function(arr1, arr2) {
    const arr11 = arr1.map((item,index)=>item+index/2);
    const arr12 = arr1.map((item,index)=>index/2-item);
    const arr21 = arr2.map((item,index)=>item+index/2);
    const arr22 = arr2.map((item,index)=>index/2-item);
    
    const merge1 = new Array(arr1.length);
    const merge2 = new Array(arr1.length);
    const merge3 = new Array(arr1.length);
    const merge4 = new Array(arr1.length);
    for(let i=0;i<arr1.length;i++){
        merge1[i] = arr11[i]+arr21[i];
        merge2[i] = arr11[i]+arr22[i];
        merge3[i] = arr12[i]+arr21[i];
        merge4[i] = arr12[i]+arr22[i];
    }
    
    
    return Math.max(findDiff(merge1),findDiff(merge2),findDiff(merge3),findDiff(merge4))
};

function findDiff(arr){
    let min = arr[0];
    let diff = 0;
    for(let i=1;i<arr.length;i++){
        diff = Math.max(arr[i]-min,diff);
        min = Math.min(arr[i],min);
    }
    return diff;
}