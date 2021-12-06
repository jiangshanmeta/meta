/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    const counts = new Array(10).fill(0);
    for (const digit of digits) {
        counts[digit]++;
    }
    const result = [];
    const backTracking = (num, rest) => {
        for (let i = rest === 3 ? 1 : 0; i < 10; i++) {
            if (counts[i] === 0) {
                continue;
            }
            if (rest === 1) {
                if (i % 2 === 0) {
                    result.push(num * 10 + i);
                }
            } else {
                counts[i]--;
                backTracking(num * 10 + i, rest - 1);
                counts[i]++;
            }
        }
    };
    backTracking(0, 3);
    return result;
};
