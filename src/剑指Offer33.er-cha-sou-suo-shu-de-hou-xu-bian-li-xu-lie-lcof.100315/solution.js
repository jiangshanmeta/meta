/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    return helper(postorder, 0, postorder.length - 1, -Infinity, Infinity);
};

function helper (list, left, right, min, max) {
    if (left > right) {
        return true;
    }
    if (list[right] <= min || list[right] >= max) {
        return false;
    }

    let low = left;
    let high = right - 1;
    let index = right;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (list[mid] > list[right]) {
            high = mid - 1;
            index = Math.min(index, mid);
        } else if (list[mid] < list[right]) {
            low = mid + 1;
        } else {
            return false;
        }
    }
    return helper(list, left, index - 1, min, list[right]) && helper(list, index, right - 1, list[right], max);
}
