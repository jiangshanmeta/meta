/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const map = new Map();
    let pairCount = 0;
    let restCount = 0;
    for (const num of nums) {
        if (map.has(num)) {
            const count = map.get(num);
            if (count === 1) {
                restCount--;
                pairCount++;
                map.set(num, 0);
            } else {
                restCount++;
                map.set(num, 1);
            }
        } else {
            restCount++;
            map.set(num, 1);
        }
    }
    return [
        pairCount,
        restCount,
    ];
};
