/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    const L = mountainArr.length();
    // 找到峰顶
    let peakIndex;
    let low = 0;
    let high = L - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midVal = mountainArr.get(mid);
        const rightVal = mountainArr.get(mid + 1);
        if (midVal < rightVal) {
            low = mid + 1;
        } else {
            const leftVal = mountainArr.get(mid - 1);
            if (midVal > leftVal) {
                peakIndex = mid;
                break;
            } else {
                high = mid - 1;
            }
        }
    }

    // 在左边找
    low = 0;
    high = peakIndex;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midVal = mountainArr.get(mid);
        if (midVal === target) {
            return mid;
        } else if (midVal < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // 在右边找
    low = peakIndex;
    high = L - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const midVal = mountainArr.get(mid);
        if (midVal === target) {
            return mid;
        } else if (midVal < target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    // 都没有
    return -1;
};
