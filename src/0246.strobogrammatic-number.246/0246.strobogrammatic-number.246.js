/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
    const map = new Map();
    map.set('0', '0');
    map.set('1', '1');
    map.set('6', '9');
    map.set('8', '8');
    map.set('9', '6');
    let left = 0;
    let right = num.length - 1;
    while (left < right) {
        if (!map.has(num[left]) || !map.has(num[right])) {
            return false;
        }
        if (map.get(num[left]) !== num[right]) {
            return false;
        }
        left++;
        right--;
    }

    if (left === right) {
        const l = num[left];
        return l === '0' || l === '1' || l === '8';
    }
    return true;
};
