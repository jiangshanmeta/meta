/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 类似 791
var relativeSortArray = function (arr1, arr2) {
    // countMap统计在arr1中出现的arr2含有的元素的个数
    const countMap = {};
    for (let i = 0; i < arr2.length; i++) {
        countMap[arr2[i]] = 0;
    }
    // restArr存的是arr1中不在arr2的元素
    const restArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (countMap[arr1[i]] === undefined) {
            restArr.push(arr1[i]);
        } else {
            countMap[arr1[i]]++;
        }
    }
    const result = [];
    for (let i = 0; i < arr2.length; i++) {
        const count = countMap[arr2[i]];
        for (let j = 0; j < count; j++) {
            result.push(arr2[i]);
        }
    }
    return result.concat(restArr.sort((a, b) => a - b));
};
