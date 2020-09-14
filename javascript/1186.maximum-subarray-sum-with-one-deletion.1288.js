/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
    // dp 最大子列和的变形
    // 没有删除元素的
    let withoutDeletion = arr[0];
    // 删除了元素的
    let withDeletion = 0;
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const nextwithoutDeletion = arr[i] + (withoutDeletion < 0 ? 0 : withoutDeletion);
        const nextwithDeletion = Math.max(
            withDeletion + arr[i],
            withoutDeletion
        );
        result = Math.max(result, nextwithoutDeletion, nextwithDeletion);
        withoutDeletion = nextwithoutDeletion;
        withDeletion = nextwithDeletion;
    }
    return result;
};
