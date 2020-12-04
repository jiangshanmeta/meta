/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    // N 要处理区域边长
    // x y 要处理区域起始位置
    function helper (grid, N, x, y) {
        if (N === 1) {
            return new Node(grid[x][y], true, null, null, null, null);
        }
        const base = grid[x][y];
        let flag = true;
        // 看包含区域是否值都一样
        for (let i = x; i < x + N; i++) {
            if (!flag) {
                break;
            }
            for (let j = y; j < y + N; j++) {
                if (grid[i][j] !== base) {
                    flag = false;
                    break;
                }
            }
        }
        // 值一样构造叶节点
        // 值不一样分成四块继续处理
        if (flag) {
            return new Node(base, true, null, null, null, null);
        } else {
            const rootNode = new Node(base, false);
            rootNode.topLeft = helper(grid, N / 2, x, y);
            rootNode.topRight = helper(grid, N / 2, x, y + N / 2);
            rootNode.bottomLeft = helper(grid, N / 2, x + N / 2, y);
            rootNode.bottomRight = helper(grid, N / 2, x + N / 2, y + N / 2);
            return rootNode;
        }
    }

    return helper(grid, grid.length, 0, 0);
};
