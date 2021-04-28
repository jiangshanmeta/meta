/**
 * @param {number} N
 * @return {boolean}
 */
var confusingNumber = function (N) {
    const map = new Map();
    map.set('0', '0');
    map.set('1', '1');
    map.set('6', '9');
    map.set('8', '8');
    map.set('9', '6');
    const s = N.toString();
    let left = 0;
    let right = s.length - 1;
    let flag = false;
    while (left < right) {
        if (!map.has(s[left]) || !map.has(s[right])) {
            return false;
        }
        if (s[right] !== map.get(s[left])) {
            flag = true;
        }
        left++;
        right--;
    }
    if (left === right) {
        if (!map.has(s[left])) {
            return false;
        }
        if (s[left] === '6' || s[left] === '9') {
            flag = true;
        }
    }

    return flag;
};
