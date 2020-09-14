/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    if (A.length < 3) {
        return false;
    }
    let index = 0;
    // 上升 最终index指向山峰
    while (index < A.length - 1 && A[index] < A[index + 1]) {
        index++;
    }
    // 一开始就是山峰(递减，无上升段) 或者最后一个是山峰(递增，无下降段)
    if (index === 0 || index === A.length - 1) {
        return false;
    }
    // 下降段
    while (index < A.length - 1 && A[index] > A[index + 1]) {
        index++;
    }
    // 看下降是否中途被终止
    return index === A.length - 1;
};
