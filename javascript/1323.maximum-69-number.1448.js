/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    // 尝试把最左侧的6转换为9
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '6') {
            return +(str.slice(0, i) + '9' + str.slice(i + 1));
        }
    }
    // 无法转换 全是9了
    return num;
};
