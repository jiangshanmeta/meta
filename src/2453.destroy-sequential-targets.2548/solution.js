/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function (nums, space) {
    const mapCount = new Map();
    const mapMin = new Map();
    let maxCount = 0;
    let minAddress = 0;
    for (const num of nums) {
        const mod = num % space;
        if (mapCount.has(mod)) {
            mapCount.set(mod, mapCount.get(mod) + 1);
            mapMin.set(mod, Math.min(num, mapMin.get(mod)));
        } else {
            mapCount.set(mod, 1);
            mapMin.set(mod, num);
        }
        const count = mapCount.get(mod);
        if (count > maxCount) {
            maxCount = count;
            minAddress = mapMin.get(mod);
        } else if (count === maxCount && mapMin.get(mod) < minAddress) {
            minAddress = mapMin.get(mod);
        }
    }
    return minAddress;
};
