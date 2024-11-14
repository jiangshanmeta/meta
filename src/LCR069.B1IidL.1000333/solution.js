/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            low = mid;
            continue;
        }
        high = mid;
    }
    return -1;
};
