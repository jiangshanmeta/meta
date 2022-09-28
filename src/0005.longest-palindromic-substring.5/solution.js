/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var maxLen = 1;
    var strLen = s.length;

    var finalLeftIndex = 0;
    var finalRightIndex = 0;

    var leftIndex;
    var rightIndex;
    var leftItem;
    var rightItem;
    var curLen;

    for (var i = 0; i < strLen; i++) {
        // 先处理回文是奇数的情况
        leftIndex = i - 1;
        rightIndex = i + 1;
        while (leftIndex > -1 && rightIndex < strLen) {
            if (s[leftIndex] === s[rightIndex]) {
                // 是回文，继续判断
                curLen = rightIndex - leftIndex + 1;
                if (curLen > maxLen) {
                    maxLen = curLen;
                    finalLeftIndex = leftIndex;
                    finalRightIndex = rightIndex;
                }
                leftIndex--;
                rightIndex++;
            } else {
                break;
            }
        }

        // 再处理回文是偶数的情况
        leftIndex = i;
        rightIndex = i + 1;
        while (leftIndex > -1 && rightIndex < strLen) {
            if (s[leftIndex] === s[rightIndex]) {
                curLen = rightIndex - leftIndex + 1;
                if (curLen > maxLen) {
                    maxLen = curLen;
                    finalLeftIndex = leftIndex;
                    finalRightIndex = rightIndex;
                }
                leftIndex--;
                rightIndex++;
            } else {
                break;
            }
        }
    }
    return s.substr(finalLeftIndex, maxLen);
};
