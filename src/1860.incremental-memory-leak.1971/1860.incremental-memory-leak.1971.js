/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {
    let i = 1;
    while (i <= memory1 || i <= memory2) {
        if (memory2 > memory1) {
            memory2 -= i;
        } else {
            memory1 -= i;
        }
        i++;
    }
    return [i, memory1, memory2, ];
};
