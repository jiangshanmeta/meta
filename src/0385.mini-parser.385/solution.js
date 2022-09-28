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
 * @param {string} s
 * @return {NestedInteger}
 */
// 和 leetcode 726 很像
var deserialize = function (s) {
    let index = 0;
    function parse () {
        const node = new NestedInteger();
        const isList = s[index] === '[';
        if (isList) {
            index++;
            while (index < s.length) {
                if (s[index] === ']') {
                    index++;
                    break;
                } else if (s[index] === ',') {
                    index++;
                } else {
                    node.add(parse());
                }
            }
        } else {
            const start = index;
            index++;
            while (index < s.length && s.charCodeAt(index) > 47 && s.charCodeAt(index) < 58) {
                index++;
            }
            node.setInteger(+s.substring(start, index));
        }
        return node;
    }
    return parse();
};
