/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let number = 1;
    let index = 0;
    while (true) {
        if (index < arr.length && arr[index] === number) {
            index++;
            number++;
            continue;
        }
        k--;
        if (k === 0) {
            return number;
        }
        number++;
    }
};
