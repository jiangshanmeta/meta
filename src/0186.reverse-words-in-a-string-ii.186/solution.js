/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
    let index = 0;
    while (index < s.length) {
        const start = index++;
        while (index < s.length && s[index] !== ' ') {
            index++;
        }
        reverse(s, start, index - 1);
        index++;
    }
    reverse(s, 0, s.length - 1);
};

function reverse (s, left, right) {
    while (left < right) {
        const tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
}
