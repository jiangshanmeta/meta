/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let result = 0;
    let oneCount = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '1' && oneCount++;
    }
    let zeroCount = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zeroCount++;
        } else {
            oneCount--;
        }
        result = Math.max(result, zeroCount + oneCount);
    }

    return result;
};
