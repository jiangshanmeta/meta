/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let left = 0;
    let right = -1;
    let a = 0;
    let b = 0;
    let c = 0;
    let result = 0;
    while (right < s.length) {
        if (a === 0 || b === 0 || c === 0) {
            right++;
            if (right === s.length) {
                break;
            }
            if (s[right] === 'a') {
                a++;
            } else if (s[right] === 'b') {
                b++;
            } else {
                c++;
            }
        } else {
            // 此时abc的数量满足 以s[left...right]为前缀的子串都满足题意
            result += s.length - right;
            if (s[left] === 'a') {
                a--;
            } else if (s[left] === 'b') {
                b--;
            } else {
                c--;
            }
            left++;
        }
    }

    return result;
};
