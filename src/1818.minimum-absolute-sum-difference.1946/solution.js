/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
    const sorted = [...new Set(nums1), ].sort((a, b) => a - b);
    let result = 0;
    let maxDiff = 0;
    const mod = 10 ** 9 + 7;
    for (let i = 0; i < nums1.length; i++) {
        const innerDiff = Math.abs(nums1[i] - nums2[i]);
        result = (result + innerDiff) % mod;
        const diff = innerDiff - binarySearch(sorted, nums2[i]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return (result - maxDiff + mod) % mod;
};

function binarySearch (sorted, target) {
    if (sorted[0] >= target) {
        return sorted[0] - target;
    }
    if (sorted[sorted.length - 1] <= target) {
        return target - sorted[sorted.length - 1];
    }

    let low = 0;
    let high = sorted.length - 1;
    let index = 0;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (sorted[mid] === target) {
            return 0;
        } else if (sorted[mid] > target) {
            high = mid - 1;
        } else {
            index = Math.max(index, mid);
            low = mid + 1;
        }
    }

    let diff = target - sorted[index];
    if (index < sorted.length && sorted[index + 1] - target < diff) {
        diff = sorted[index + 1] - target;
    }
    return diff;
}
