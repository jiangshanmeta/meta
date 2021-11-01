/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const isValid = (left, right) => {
        while (left < right) {
            if (s[left++] !== s[right--]) {
                return false;
            }
        }
        return true;
    };
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isValid(left + 1, right) || isValid(left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};
