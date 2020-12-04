/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
var deleteTreeNodes = function (nodes, parent, value) {
    const subNodes = new Array(nodes);
    for (let i = 0; i < nodes; i++) {
        subNodes[i] = [];
    }
    for (let i = 1; i < parent.length; i++) {
        subNodes[parent[i]].push(i);
    }
    const subNodesSum = new Array(nodes).fill(0);
    dfs1(subNodes, subNodesSum, 0, value);
    const deleted = new Array(nodes).fill(false);
    for (let i = 0; i < nodes; i++) {
        if (!deleted[i] && subNodesSum[i] === 0) {
            dfs2(i, deleted, subNodes);
        }
    }
    let result = 0;
    for (let i = 0; i < nodes; i++) {
        if (!deleted[i]) {
            result++;
        }
    }
    return result;
};
// dfs1求和
function dfs1 (subNodes, subNodesSum, index, values) {
    let sum = values[index];
    for (let i = 0; i < subNodes[index].length; i++) {
        sum += dfs1(subNodes, subNodesSum, subNodes[index][i], values);
    }
    subNodesSum[index] = sum;
    return sum;
}
// dfs2删除节点
function dfs2 (index, deleted, subNodes) {
    deleted[index] = true;
    for (let i = 0; i < subNodes[index].length; i++) {
        dfs2(subNodes[index][i], deleted, subNodes);
    }
}
