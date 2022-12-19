/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    return Math.max(...strs.map((str) => {
        if (/^\d+$/.test(str)) {
            return +str;
        }
        return str.length;
    }));
};
