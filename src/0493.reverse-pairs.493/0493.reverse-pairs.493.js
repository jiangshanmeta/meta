/**
 * @param {number[]} nums
 * @return {number}
 */
// merge sort的思路
var reversePairs = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    return merge(nums, new Array(nums.length), 0, nums.length - 1);
};
// 逆序对的数量 = 左半序列逆序对数量+右半序列逆序对数量+跨越的逆序对数量
function merge (nums, helper, start, end) {
    if (start === end) {
        return 0;
    }
    const mid = start + ((end - start) >> 1);
    let count = 0;
    count += merge(nums, helper, start, mid);
    count += merge(nums, helper, mid + 1, end);
    // 求跨越的逆序对数量
    // 此时左右序列都是排好序的
    let index1 = start;
    let index2 = mid + 1;
    while (index1 < mid + 1 && index2 < end + 1) {
        // 在左序列中index1及之后的都能和右序列的index2构成逆序对
        if (nums[index1] > 2 * nums[index2]) {
            count += mid - index1 + 1;
            index2++;
        } else {
            index1++;
        }
    }
    // 把两个排序的子序列合并(标准的merge)
    index1 = start;
    index2 = mid + 1;
    for (let i = start; i < end + 1; i++) {
        helper[i] = nums[i];
    }

    let index = start;
    while (index1 < mid + 1 && index2 < end + 1) {
        if (helper[index1] < helper[index2]) {
            nums[index++] = helper[index1++];
        } else {
            nums[index++] = helper[index2++];
        }
    }
    while (index1 < mid + 1) {
        nums[index++] = helper[index1++];
    }
    while (index2 < end + 1) {
        nums[index++] = helper[index2++];
    }
    return count;
}

// 线段树解法
var reversePairs = function (nums) {
    const copy = [
        ...new Set(nums), ].sort((a, b) => a - b);

    const numRankMap = {};
    for (let i = 0; i < copy.length; i++) {
        numRankMap[copy[i]] = i;
    }
    const segmentTree = new Array(copy.length * 4).fill(0);
    let result = 0;
    for (let i = nums.length - 1; i > -1; i--) {
        const num = nums[i] / 2;
        let rank = copy.length;
        let low = 0;
        let high = copy.length - 1;
        // 找到nums[i]/2在copy的排名
        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            if (copy[mid] < num) {
                low = mid + 1;
            } else {
                rank = Math.min(rank, mid);
                high = mid - 1;
            }
        }

        if (rank !== 0) {
            result += querySegmentTree(segmentTree, 0, 0, copy.length - 1, 0, rank - 1);
        }

        updateSegmentTree(segmentTree, 0, 0, copy.length - 1, numRankMap[nums[i]]);
    }
    return result;
};

function querySegmentTree (segmentTree, rootIndex, rangeL, rangeR, queryL, queryR) {
    if (rangeL === queryL && rangeR === queryR) {
        return segmentTree[rootIndex];
    }
    const mid = rangeL + ((rangeR - rangeL) >> 1);
    const leftIndex = 2 * rootIndex + 1;
    const rightIndex = 2 * rootIndex + 2;
    if (queryL > mid) {
        return querySegmentTree(segmentTree, rightIndex, mid + 1, rangeR, queryL, queryR);
    } else if (queryR < mid + 1) {
        return querySegmentTree(segmentTree, leftIndex, rangeL, mid, queryL, queryR);
    } else {
        return querySegmentTree(segmentTree, leftIndex, rangeL, mid, queryL, mid) + querySegmentTree(segmentTree, rightIndex, mid + 1, rangeR, mid + 1, queryR);
    }
}

function updateSegmentTree (segmentTree, rootIndex, rangeL, rangeR, target) {
    if (rangeL === rangeR) {
        segmentTree[rootIndex]++;
        return;
    }
    const mid = rangeL + ((rangeR - rangeL) >> 1);
    const leftIndex = 2 * rootIndex + 1;
    const rightIndex = 2 * rootIndex + 2;
    if (target > mid) {
        updateSegmentTree(segmentTree, rightIndex, mid + 1, rangeR, target);
    } else {
        updateSegmentTree(segmentTree, leftIndex, rangeL, mid, target);
    }
    segmentTree[rootIndex] = segmentTree[leftIndex] + segmentTree[rightIndex];
}
