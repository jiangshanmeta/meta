/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    const result = [];
    let index = 1;
    for (let i = 0; i < target.length; i++) {
        const num = target[i];
        while (index < num) {
            result.push('Push');
            result.push('Pop');
            index++;
        }
        result.push('Push');
        index++;
    }
    return result;
};
