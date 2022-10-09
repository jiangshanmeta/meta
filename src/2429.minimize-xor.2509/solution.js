/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
    let count = count1(num2);
    const numStr = num1.toString(2);

    if (count >= numStr.length) {
        return (1 << count) - 1;
    }
    const result = new Array(numStr.length).fill('0');
    for (let i = 0; i < result.length; i++) {
        if (count === 0) {
            break;
        }
        if (numStr[i] === '1') {
            result[i] = '1';
            count--;
        }
    }
    for (let i = result.length - 1; i > -1; i--) {
        if (count === 0) {
            break;
        }
        if (result[i] === '0') {
            result[i] = '1';
            count--;
        }
    }

    return Number.parseInt(result.join(''), 2);
};

function count1 (num) {
    let result = 0;
    while (num) {
        result++;
        num = num & (num - 1);
    }
    return result;
}
