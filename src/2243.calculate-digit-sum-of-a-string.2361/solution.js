/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    while (s.length > k) {
        let index = 0;
        const result = [];
        let target = k;
        while (index < s.length) {
            let sum = 0;
            while (index < target && index < s.length) {
                sum += (+s[index++]);
            }
            result.push(sum);
            target += k;
        }
        s = result.join('');
    }
    return s;
};
