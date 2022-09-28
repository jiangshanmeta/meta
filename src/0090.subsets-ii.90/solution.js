/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 参考 http://www.cnblogs.com/mozi-song/p/9579418.html

var subsetsWithDup = function (nums) {
    // 利用排序把重复元素放在一起
    nums.sort((a, b) => a - b);

    function backTracking (list, nums, sequence, index) {
        sequence.push(list.slice());
        for (let i = index; i < nums.length; i++) {
            // 处理重复元素
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            list.push(nums[i]);
            backTracking(list, nums, sequence, i + 1);
            list.pop();
        }
    }
    const sequence = [];
    backTracking([], nums, sequence, 0);
    return sequence;
};
