/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
// 就是完全二叉树的数组实现
var CBTInserter = function (root) {
    const queue = [
        root, ];
    this._list = [
        null, ];
    while (queue.length) {
        const node = queue.shift();
        this._list.push(node);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
    // 通过索引找父节点
    const parentNode = this._list[this._list.length / 2 | 0];
    const newNode = new TreeNode(v);
    parentNode[this._list.length % 2 === 0 ? 'left' : 'right'] = newNode;

    this._list.push(newNode);
    return parentNode.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this._list[1];
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = Object.create(CBTInserter).createNew(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
