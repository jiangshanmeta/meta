/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let result = high;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        let count = 0;
        for (let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid);
        }
        if (count > h) {
            low = mid + 1;
        } else {
            result = Math.min(result, mid);
            high = mid - 1;
        }
    }
    return result;
};
