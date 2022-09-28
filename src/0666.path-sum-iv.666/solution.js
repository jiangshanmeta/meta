/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
    const tree = new Array(15).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        const nodeVal = num % 10;
        num = (num - nodeVal) / 10;
        let offset = num % 10;
        num = (num - offset) / 10;
        offset--;
        const depth = num - 1;

        tree[2 ** depth - 1 + offset] = nodeVal;
    }

    let result = 0;
    function dfs (index, sum) {
        const lIsNull = isNull(index * 2 + 1);
        const rIsNull = isNull(index * 2 + 2);
        sum += tree[index];
        if (lIsNull && rIsNull) {
            result += sum;
            return;
        }

        !lIsNull && dfs(2 * index + 1, sum);
        !rIsNull && dfs(2 * index + 2, sum);
    }
    function isNull (index) {
        if (index >= tree.length) {
            return true;
        }
        return tree[index] === -1;
    }

    dfs(0, 0);
    return result;
};
