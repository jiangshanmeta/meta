/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const map = new Map();
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }
    const counts = new Array(arr2.length).fill(0);
    const rest = [];
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            counts[map.get(arr1[i])]++;
        } else {
            rest.push(arr1[i]);
        }
    }
    const result = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            result.push(arr2[i]);
        }
    }
    rest.sort((a, b) => a - b);
    result.push(...rest);
    return result;
};
