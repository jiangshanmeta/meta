/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
    let maxDepth = 0;
    function getDepth (node, depth) {
        maxDepth = Math.max(depth, maxDepth);
        if (node.isInteger()) {
            return;
        }
        depth++;
        node.getList().forEach(item => getDepth(item, depth));
    }
    nestedList.forEach(node => getDepth(node, 1));
    let result = 0;
    function calc (node, depth) {
        if (node.isInteger()) {
            result += node.getInteger() * depth;
            return;
        }
        depth--;
        node.getList().forEach(item => calc(item, depth));
    }
    nestedList.forEach((item) => calc(item, maxDepth));
    return result;
};
