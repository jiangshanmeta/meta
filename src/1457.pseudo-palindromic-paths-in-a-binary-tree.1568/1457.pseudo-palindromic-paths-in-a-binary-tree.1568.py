# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root):
        return self.dfs(root,0)
    def dfs(self,root,counts):
        if root is None:
            return 0
        counts ^= (1 << root.val)
        if root.left is None and root.right is None:
            if (counts&(counts-1)) == 0:
                return 1
            else:
                return 0
        else:
            return self.dfs(root.left,counts)+self.dfs(root.right,counts)
            