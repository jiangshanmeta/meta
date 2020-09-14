/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.split(' ');
    let index = arr.length;
    while (index--) {
        const item = arr[index];
        if (item) {
            return item.length;
        }
    }

    return 0;
};
