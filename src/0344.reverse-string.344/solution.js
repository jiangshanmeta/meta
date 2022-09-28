/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // 最基本的双指针
    let left = 0;
    let right = s.length - 1;
    let tmp;
    while (left < right) {
        tmp = s[right];
        s[right] = s[left];
        s[left] = tmp;
        left++;
        right--;
    }
};
