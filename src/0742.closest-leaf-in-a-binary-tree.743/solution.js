/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function (root, k) {
    const path = [root, ];
    findPath(root, k, path);
    let resultNode = 0;
    let minDis = Infinity;
    function getLeadNode (root, dis) {
        if (dis > minDis) {
            return;
        }
        if (root.left === null && root.right === null) {
            minDis = dis;
            resultNode = root.val;
            return;
        }
        dis++;
        root.left && getLeadNode(root.left, dis);
        root.right && getLeadNode(root.right, dis);
    }
    getLeadNode(path[path.length - 1], 0);
    for (let i = path.length - 2; i > -1; i--) {
        const dis = path.length - i;
        if (path[i + 1] === path[i].left) {
            path[i].right && getLeadNode(path[i].right, dis);
        } else {
            path[i].left && getLeadNode(path[i].left, dis);
        }
    }

    return resultNode;
};

function findPath (root, target, path) {
    if (root.val === target) {
        return true;
    }
    if (root.left) {
        path.push(root.left);
        const rst = findPath(root.left, target, path);
        if (rst) {
            return true;
        }
        path.pop();
    }

    if (root.right) {
        path.push(root.right);
        const rst = findPath(root.right, target, path);
        if (rst) {
            return true;
        }
        path.pop();
    }
    return false;
}
