/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const counts = new Array(32).fill(0);
    for (let num of nums) {
        let index = 31;
        while (num > 0) {
            if (num & 1) {
                counts[index]++;
            }
            index--;
            num >>>= 1;
        }
    }
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = result * 2 + (counts[i] % 3 === 0 ? 0 : 1);
    }
    return result;
};
