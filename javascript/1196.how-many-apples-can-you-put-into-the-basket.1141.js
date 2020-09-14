/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function (arr) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let sum = 0;
    // 有限放质量小的才能使放的总数最大
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 5000) {
            break;
        }
        count++;
    }
    return count;
};
