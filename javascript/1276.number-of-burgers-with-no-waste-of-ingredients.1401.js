/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
    // 二元一次方程组
    const tmp = tomatoSlices - 2 * cheeseSlices;
    if (tmp < 0 || (tmp & 1)) {
        return [];
    }
    const x = tmp / 2;
    if (x > cheeseSlices) {
        return [];
    }
    const y = cheeseSlices - x;
    return [
        x, y, ];
};
