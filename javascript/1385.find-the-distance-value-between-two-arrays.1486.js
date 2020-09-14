/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        let flag = true;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr2[j] - arr1[i]) <= d) {
                flag = false;
                break;
            }
        }
        flag && result++;
    }
    return result;
};
