/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
    if (num > 0) {
        return +findMin(String(num).split(''));
    } else if (num < 0) {
        return -findMax(String(-num).split(''));
    }
    return num;
};

function findMax (arr) {
    return arr.sort((a, b) => b - a).join('');
}

function findMin (arr) {
    arr.sort((a, b) => a - b);
    if (arr[0] === '0') {
        const firstNonZeroIndex = arr.findIndex((item) => item !== '0');
        arr[0] = arr[firstNonZeroIndex];
        arr[firstNonZeroIndex] = '0';
    }
    return arr.join('');
}
