/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
    // high初始值为piles最大的
    let low = 1;
    let high = -Infinity;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] > high) {
            high = piles[i];
        }
    }

    // 二分查找
    while (low <= high) {
        const mid = (low + high) / 2 | 0;
        let count = 0;
        for (let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid);
        }

        // K太小了
        if (count > H) {
            low = mid + 1;
        } else {
            // mid可行，但不见得是最小的
            high = mid;
            let min = mid;
            // 继续二分查找最小的那一个
            while (low <= high) {
                const mid = (low + high) / 2 | 0;
                let count = 0;
                for (let i = 0; i < piles.length; i++) {
                    count += Math.ceil(piles[i] / mid);
                }
                if (count > H) {
                    low = mid + 1;
                } else {
                    min = mid;
                    high = mid - 1;
                }
            }
            return min;
        }
    }
};
