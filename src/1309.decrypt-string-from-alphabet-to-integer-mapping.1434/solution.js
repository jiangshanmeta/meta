/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    const result = [];
    let index = 0;
    while (index < s.length) {
        let code;
        // 通过#判断是否当成两位数字处理
        if (index + 2 < s.length && s[index + 2] === '#') {
            code = +s.slice(index, index + 2);
            index += 3;
        } else {
            code = +s.slice(index, index + 1);
            index++;
        }
        result.push(String.fromCharCode(code + 96));
    }
    return result.join('');
};
