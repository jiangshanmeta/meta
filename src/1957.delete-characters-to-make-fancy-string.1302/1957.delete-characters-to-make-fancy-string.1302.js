/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    const result = [];
    let index = 0;
    while (index < s.length) {
        const char = s[index++];
        let count = 1;
        while (index < s.length && s[index] === char) {
            index++;
            count++;
        }
        result.push(char.repeat(Math.min(2, count)));
    }
    return result.join('');
};
