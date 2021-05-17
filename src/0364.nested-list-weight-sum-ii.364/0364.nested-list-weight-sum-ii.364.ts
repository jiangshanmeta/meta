/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

function depthSumInverse (nestedList: NestedInteger[]): number {
    let maxDepth = 1;
    function getDepth (root:NestedInteger, depth:number) {
        maxDepth = Math.max(depth, maxDepth);
        if (!root.isInteger()) {
            depth++;
            root.getList().forEach(node => getDepth(node, depth));
        }
    }
    nestedList.forEach(node => getDepth(node, 1));
    let result = 0;
    function calc (root:NestedInteger, depth:number) {
        if (root.isInteger()) {
            result += root.getInteger() * depth;
        } else {
            depth--;
            root.getList().forEach(item => calc(item, depth));
        }
    }
    nestedList.forEach(node => calc(node, maxDepth));
    return result;
}
