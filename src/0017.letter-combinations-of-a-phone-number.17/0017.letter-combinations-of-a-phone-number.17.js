/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var map = {
        // 0:[""],
        // 1:[""],
        2: [
            'a', 'b', 'c',
        ],
        3: [
            'd', 'e', 'f',
        ],
        4: [
            'g', 'h', 'i',
        ],
        5: [
            'j', 'k', 'l',
        ],
        6: [
            'm', 'n', 'o',
        ],
        7: [
            'p', 'q', 'r', 's',
        ],
        8: [
            't', 'u', 'v',
        ],
        9: [
            'w', 'x', 'y', 'z',
        ],
    };
    var digitsArr = digits.split('').filter(function (item) {
        return item > 1;
    });
    var rst = [];
    var len = digitsArr.length;
    if (!len) {
        return rst;
    }
    inner('', 0);
    console.log(digitsArr);
    function inner (prefix, index) {
        if (index < len) {
            for (var i = 0; i < map[digitsArr[index]].length; i++) {
                inner(prefix + map[digitsArr[index]][i], index + 1);
            }
        } else {
            rst.push(prefix);
        }
    }
    return rst;
};
