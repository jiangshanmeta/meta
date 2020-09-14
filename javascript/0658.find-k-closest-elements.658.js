/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

function findIndex (arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let index = -1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
            if (mid > index) {
                index = mid;
            }
        }
    }
    return index;
}

var findClosestElements = function (arr, k, x) {
    // 处理边界情况，直接取前k个和后k个
    if (x <= arr[0]) {
        return arr.slice(0, k);
    }
    if (x >= arr[arr.length - 1]) {
        return arr.slice(-k);
    }
    // 二分找到<=x中最接近x的
    let index = findIndex(arr, x);

    // 双指针取元素
    let index2 = index + 1;
    let count = 0;
    while (count < k && index !== -1 && index2 !== arr.length) {
        const delta1 = x - arr[index];
        const delta2 = arr[index2] - x;
        delta2 < delta1 ? index2++ : index--;
        count++;
    }
    if (count < k) {
        if (index === -1) {
            index2 += k - count;
        } else {
            index -= k - count;
        }
    }
    return arr.slice(index + 1, index2);
};
