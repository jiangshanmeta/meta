/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    const strList = [];
    for (let i = 0; i < s.length; i++) {
        strList.push(s.charCodeAt(i) - 96);
    }
    let str = strList.join('');
    while (k--) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            result += (+str[i]);
        }
        str = result.toString();
    }

    return +str;
};
