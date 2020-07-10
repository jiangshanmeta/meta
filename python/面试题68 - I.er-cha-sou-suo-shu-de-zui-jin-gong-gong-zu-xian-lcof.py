# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if(p.val<q.val):
            return self.helper(root,p,q)
        else:
            return self.helper(root,q,p)
    def helper(self,root,p,q):
        if root.val>=p.val and root.val<=q.val:
            return root
        if root.val>q.val:
            return self.helper(root.left,p,q)
        else:
            return self.helper(root.right,p,q)