/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
    const indexs = new Array(mat.length).fill(0);
    const L = mat[0].length;
    while (indexs[0] < L) {
        const el = mat[0][indexs[0]];
        // flag标记是否是等于el
        let flag = true;
        for (let i = 1; i < indexs.length; i++) {
            // 该行最大的都比el小 不用看了
            if (mat[i][L - 1] < el) {
                return -1;
            }
            const index = binarySearch(mat[i], indexs[i], el);
            if (mat[i][index] !== el) {
                flag = false;
            }
            indexs[i] = index;
        }
        if (flag) {
            return el;
        }
        // 其实可以优化，根据其他行的当前元素找在第一行的索引
        indexs[0]++;
    }
    return -1;
};
// 找到>=target的最接近的元素对应索引
function binarySearch (arr, low, target) {
    let high = arr.length - 1;
    let rst = high;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            rst = Math.min(rst, mid);
            high = mid - 1;
        }
    }
    return rst;
}
