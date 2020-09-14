/**
 * @param {number[]} T
 * @return {number[]}
 */
// 和503思路一致
var dailyTemperatures = function (T) {
    const result = new Array(T.length).fill(0);
    const stack = [];
    let index = 0;
    while (index < T.length) {
        const t = T[index];
        while (stack.length > 0 && t > T[stack[stack.length - 1]]) {
            const beforeIndex = stack.pop();
            result[beforeIndex] = index - beforeIndex;
        }
        stack.push(index);
        index++;
    }
    return result;
};
