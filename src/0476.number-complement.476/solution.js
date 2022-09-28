/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    const arr = [];
    while (num > 0) {
        arr.unshift(num & 1);
        num = num >> 1;
    }
    const newArr = arr.map((bit) => {
        return bit ? 0 : 1;
    });
    return parseInt(newArr.join(''), 2);
};
