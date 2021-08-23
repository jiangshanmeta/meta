/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const isValidChar = (index) => {
        const code = s.charCodeAt(index);
        return (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123);
    };

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isValidChar(left)) {
            left++;
        }
        while (left < right && !isValidChar(right)) {
            right--;
        }
        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
