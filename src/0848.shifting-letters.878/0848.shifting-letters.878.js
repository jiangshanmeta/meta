/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (S, shifts) {
    // 获得第i个字符总共shift的次数
    for (let i = shifts.length - 2; i > -1; i--) {
        shifts[i] += shifts[i + 1];
    }
    const newCharCode = [];
    for (let i = 0; i < S.length; i++) {
        newCharCode.push((S.charCodeAt(i) - 97 + shifts[i]) % 26 + 97);
    }

    return String.fromCharCode(...newCharCode);
};
