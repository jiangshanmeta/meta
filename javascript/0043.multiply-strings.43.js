/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    if (num2.length > num1.length) {
        const tmp = num2;
        num2 = num1;
        num1 = tmp;
    }
    let sum = '0';
    let suffix = '';
    const cache = {
        0: '0',
    };
    for (let i = num2.length - 1; i > -1; i--) {
        if (!cache[num2[i]]) {
            cache[num2[i]] = multiOne(num1, num2[i]);
        }
        const tmp = `${cache[num2[i]]}${suffix}`;
        sum = add(sum, tmp);
        suffix = `${suffix}0`;
    }

    return sum;
};
// 乘一位数 b是那一位数
function multiOne (a, b) {
    const result = [];
    let carry = 0;
    for (let i = a.length - 1; i > -1; i--) {
        const sum = a[i] * b + carry;
        result.unshift(sum % 10);
        carry = (sum - result[0]) / 10;
    }
    carry && result.unshift(carry);

    return result.join('');
}
// 实现字符串加法
function add (a, b) {
    const result = [];
    const L = Math.max(a.length, b.length);
    a = a.padStart(L, '0');
    b = b.padStart(L, '0');
    let carry = 0;
    for (let i = L - 1; i > -1; i--) {
        const sum = (+a[i]) + (+b[i]) + carry;
        result.unshift(sum % 10);
        carry = (sum - result[0]) / 10;
    }
    carry && result.unshift(carry);
    return result.join('');
}
