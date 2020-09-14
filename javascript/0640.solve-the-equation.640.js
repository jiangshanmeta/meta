/**
 * @param {string} equation
 * @return {string}
 */

function parse (str) {
    let xCount = 0;
    let value = 0;
    let signal = 1;
    let index = 0;
    while (index < str.length) {
        if (str[index] === '+') {
            signal = 1;
            index++;
        } else if (str[index] === '-') {
            signal = -1;
            index++;
        } else if (str[index] === 'x') {
            // 只有一个x的情景
            xCount += signal;
            index++;
        } else {
            // 是数字，但不知是不是x的系数
            const startIndex = index++;
            let isNumber = true;
            while (index < str.length) {
                if (str[index] === '+' || str[index] === '-') {
                    break;
                }
                if (str[index] === 'x') {
                    isNumber = false;
                    break;
                }
                index++;
            }
            if (isNumber) {
                value += signal * str.slice(startIndex, index);
            } else {
                xCount += signal * str.slice(startIndex, index);
                index++;
            }
        }
    }
    return {
        xCount,
        value,
    };
}

var solveEquation = function (equation) {
    const eqIndex = equation.indexOf('=');
    const leftInfo = parse(equation.slice(0, eqIndex));
    const rightInfo = parse(equation.slice(eqIndex + 1));

    const xCount = leftInfo.xCount - rightInfo.xCount;
    const value = rightInfo.value - leftInfo.value;

    if (xCount !== 0) {
        return `x=${value / xCount}`;
    }
    if (value === 0) {
        return 'Infinite solutions';
    }
    return 'No solution';
};
