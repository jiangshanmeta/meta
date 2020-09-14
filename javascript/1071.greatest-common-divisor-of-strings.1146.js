/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    const t1 = getSmallestDividor(str1);
    const t2 = getSmallestDividor(str2);
    if (t1 === '' || t2 === '' || t1 !== t2) {
        return '';
    }
    const x = gcd(str1.length / t1.length, str2.length / t2.length);
    return t1.repeat(x);
};
// 找到能分割str的长度最小的T 即T不可分割
function getSmallestDividor (str) {
    let index = 1;
    while (true) {
        index = str.indexOf(str[0], index);
        if (index === -1) {
            return str;
        }
        if (str.length % index === 0 && str === str.substring(0, index).repeat(str.length / index)) {
            return str.substring(0, index);
        }
        index++;
    }
}
// 求最小公倍数
function gcd (m, n) {
    if (m < n) {
        const tmp = m;
        m = n;
        n = tmp;
    }
    if (n === 0) {
        return m;
    }
    return gcd(n, m % n);
}
