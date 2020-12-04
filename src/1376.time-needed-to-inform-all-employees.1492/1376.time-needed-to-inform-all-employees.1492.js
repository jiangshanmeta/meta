/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    const tree = {};
    for (let i = 0; i < manager.length; i++) {
        const managerId = manager[i];
        if (!tree[managerId]) {
            tree[managerId] = [];
        }
        tree[managerId].push(i);
    }

    return levelOrder(headID, tree, informTime);
};

function levelOrder (rootIndex, tree, informTime) {
    if (!tree[rootIndex]) {
        return 0;
    }

    return Math.max(...tree[rootIndex].map(childIndex => levelOrder(childIndex, tree, informTime))) + informTime[rootIndex];
}
