/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
    birth.sort((a, b) => a - b);
    death.sort((a, b) => a - b);
    let result = birth[0];
    let maxCount = 0;
    let curCount = 0;
    let index1 = 0;
    let index2 = 0;
    while (index1 < birth.length) {
        const curYear = birth[index1];
        while (index1 < birth.length && birth[index1] === curYear) {
            index1++;
            curCount++;
        }
        while (index2 < death.length && death[index2] < curYear) {
            index2++;
            curCount--;
        }
        if (curCount > maxCount) {
            maxCount = curCount;
            result = curYear;
        }
    }

    return result;
};
