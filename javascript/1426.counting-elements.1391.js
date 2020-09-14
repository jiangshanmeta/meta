/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = true;
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i] + 1]) {
            result++;
        }
    }
    return result;
};
