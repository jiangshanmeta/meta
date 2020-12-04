/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    const result = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        // 大写字母
        if (code > 64 && code < 91) {
            result[i] = String.fromCharCode(code + 32);
        } else {
            result[i] = str[i];
        }
    }
    return result.join('');
};
