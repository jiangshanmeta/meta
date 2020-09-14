/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    // 处理重复的
    const groupBy = {};
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (groupBy[item] === undefined) {
            groupBy[item] = [
                i, ];
        } else {
            groupBy[item].push(i);
        }
    }

    function backTracking (list, sequence, nums, used, groupBy, index) {
        if (list.length > 1) {
            sequence.push(list.slice());
        }
        for (let i = index; i < nums.length; i++) {
            // 因为是递增序列
            if (list.length > 0 && nums[i] < list[list.length - 1]) {
                continue;
            }

            // 处理重复的元素
            const indexs = groupBy[nums[i]];
            const itemIndex = indexs.indexOf(i);
            // index-1是上一个被加入的元素的索引，在此之后重复的元素必须按序被添加，不能跨越
            if (itemIndex > 0 && indexs[itemIndex - 1] > index - 1 && !used[indexs[itemIndex - 1]]) {
                continue;
            }

            // backTracking问题的模板了
            used[i] = true;
            list.push(nums[i]);
            backTracking(list, sequence, nums, used, groupBy, i + 1);
            list.pop();
            used[i] = false;
        }
    }
    const used = new Array(nums.length).fill(false);
    const sequence = [];
    backTracking([], sequence, nums, used, groupBy, 0);
    return sequence;
};
