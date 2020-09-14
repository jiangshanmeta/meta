/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
    const map = {
        0: -1,
    };
    const sequence = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map[sum - target] !== undefined) {
            sequence.push([
                map[sum - target], i, ]);
        }
        map[sum] = i;
    }
    let result = Infinity;
    if (sequence.length < 2) {
        return -1;
    }
    const helper = [
        sequence[0][1] - sequence[0][0], ];
    for (let i = 1; i < sequence.length; i++) {
        for (let j = i - 1; j > -1; j--) {
            if (sequence[j][1] <= sequence[i][0]) {
                result = Math.min(result, sequence[i][1] - sequence[i][0] + helper[j]);
                break;
            }
        }
        helper.push(Math.min(helper[helper.length - 1], sequence[i][1] - sequence[i][0]));
    }

    return result === Infinity ? -1 : result;
};
