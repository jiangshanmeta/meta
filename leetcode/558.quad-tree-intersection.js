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
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
    function helper(tree1,tree2){
        // 都是叶节点 OR 运算
        if(tree1.isLeaf && tree2.isLeaf){
            return tree1.val || tree2.val;
        }
        // 分别处理四块 注意叶节点的处理
        const topLeft = helper(tree1.isLeaf?tree1:tree1.topLeft,tree2.isLeaf?tree2:tree2.topLeft);
        const topRight = helper(tree1.isLeaf?tree1:tree1.topRight,tree2.isLeaf?tree2:tree2.topRight);
        const bottomLeft = helper(tree1.isLeaf?tree1:tree1.bottomLeft,tree2.isLeaf?tree2:tree2.bottomLeft);
        const bottomRight = helper(tree1.isLeaf?tree1:tree1.bottomRight,tree2.isLeaf?tree2:tree2.bottomRight);
        
        // 四块完全相等 即都是相同的布尔值 返回该布尔值
        if(topLeft === topRight && topRight === bottomLeft && bottomLeft === bottomRight){
            return topLeft; 
        }
        // 构建新的四叉树 注意helper返回的可能是四叉树根节点 也可能是布尔值
        const rootNode = new Node(false,false);
        rootNode.topLeft = (topLeft instanceof Node)?topLeft:new Node(topLeft,true,null,null,null,null);
        rootNode.topRight = (topRight instanceof Node)?topRight:new Node(topRight,true,null,null,null,null);
        rootNode.bottomLeft = (bottomLeft instanceof Node)?bottomLeft:new Node(bottomLeft,true,null,null,null,null);
        rootNode.bottomRight = (bottomRight instanceof Node)?bottomRight:new Node(bottomRight,true,null,null,null,null);

        return rootNode;
    }
    
    const result = helper(quadTree1,quadTree2);
    return result instanceof Node?result:new Node(result,true,null,null,null,null);
};