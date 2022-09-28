/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    // 其实可以用二分 偷懒了
    const oneFourth = arr.length / 4;
    let element;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        } else {
            count = 1;
            element = arr[i];
        }
        if (count > oneFourth) {
            return element;
        }
    }
};
