/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 负数乘法 按规则做就好了
var complexNumberMultiply = function (a, b) {
    let plusIndex = a.indexOf('+');
    const x1 = +a.slice(0, plusIndex);
    const y1 = +a.slice(plusIndex + 1, -1);

    plusIndex = b.indexOf('+');
    const x2 = +b.slice(0, plusIndex);
    const y2 = +b.slice(plusIndex + 1, -1);

    return `${x1 * x2 - y1 * y2}+${x1 * y2 + x2 * y1}i`;
};
