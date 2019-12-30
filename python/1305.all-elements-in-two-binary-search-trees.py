# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getAllElements(self, root1, root2) :
        r1 = []
        r2 = []
        index1 = 0
        index2 = 0
        if root1 is not None:
            self.inOrder(root1,r1)
        if root2 is not None:
            self.inOrder(root2,r2)
        L1 = len(r1)
        L2 = len(r2)
        result = []
        while index1<L1 and index2<L2:
            if r1[index1]<r2[index2]:
                result.append(r1[index1])
                index1 += 1
            else :
                result.append(r2[index2])
                index2 += 1
        while index1<L1 :
            result.append(r1[index1])
            index1 += 1
        while index2<L2:
            result.append(r2[index2])
            index2 += 1
        return result
        
        
        
    # 中序遍历
    def inOrder(self,root,result):
        if root.left is not None :
            self.inOrder(root.left,result)
        
        result.append(root.val)
        
        if root.right is not None:
            self.inOrder(root.right,result)