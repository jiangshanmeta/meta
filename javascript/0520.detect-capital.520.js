/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    // charCode 先大写后小写  90是Z 所以小于91为大写 大于91为小写
    const isFirstUpper = word.charCodeAt(0) < 91;

    if (isFirstUpper) {
        const isSecondUpper = word.charCodeAt(1) < 91;
        // 前两个都大写 全应该大写
        if (isSecondUpper) {
            for (let i = 2; i < word.length; i++) {
                if (word.charCodeAt(i) > 90) {
                    return false;
                }
            }
        } else {
            // 第二个是小写 后面的都应该是小写
            for (let i = 2; i < word.length; i++) {
                if (word.charCodeAt(i) < 91) {
                    return false;
                }
            }
        }
    } else {
        // 首字母小写，其他字母都应该是小写
        for (let i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) < 91) {
                return false;
            }
        }
    }

    return true;
};
