/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const result = [];
    let addon = 0;
    let index1 = a.length - 1;
    let index2 = b.length - 1;
    while (index1 > -1 && index2 > -1) {
        const sum = addon + (+a[index1--]) + (+b[index2--]);
        result.push(sum & 1);
        addon = sum >> 1;
    }
    while (index1 > -1) {
        const sum = addon + (+a[index1--]);
        result.push(sum & 1);
        addon = sum >> 1;
    }
    while (index2 > -1) {
        const sum = addon + (+b[index2--]);
        result.push(sum & 1);
        addon = sum >> 1;
    }
    if (addon) {
        result.push(addon);
    }
    return result.reverse().join('');
};
