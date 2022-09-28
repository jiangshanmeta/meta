/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    let low = 0;
    let high = A.length - 1;
    while (true) {
        const mid = (low + high) >> 1;
        // 找到山峰了
        if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
            return mid;
        }

        if (A[mid] < A[mid - 1]) {
            // 处于下坡
            high = mid - 1;
        } else {
            // 处于上坡
            low = mid + 1;
        }
    }
};
