/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    return intersection(intersection(arr1,arr2),arr3);
};
// 两个有序序列的交集
function intersection(arr1,arr2){
    const result = [];
    let index1 = 0;
    let index2 = 0;
    while(index1<arr1.length && index2<arr2.length){
        if(arr1[index1]<arr2[index2]){
            index1++;
        }else if(arr1[index1]>arr2[index2]){
            index2++;
        }else{
            result.push(arr1[index1])
            index1++;
            index2++;
        }
    }
    return result;
}