/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    const linkedList = [];
    while(head){
        linkedList.push(head.val);
        head = head.next;
    }
    const linkedListVals = linkedList.join(',');
    function dfs(root,sequence){
        if(!root){
            return false;
        }
        sequence.push(root.val);
        if(!root.left && !root.right){
            const vals = sequence.join(',');
            sequence.pop();
            return vals.includes(linkedListVals);
        }
        if(dfs(root.left,sequence) || dfs(root.right,sequence)){
            return true;
        }
        sequence.pop();
        return false;
    }
    return dfs(root,[]);
};