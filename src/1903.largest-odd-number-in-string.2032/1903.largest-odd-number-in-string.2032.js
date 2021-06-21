/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let index = num.length - 1;
    while (index > -1) {
        if ((+num[index]) & 1) {
            break;
        }
        index--;
    }

    return num.slice(0, index + 1);
};
