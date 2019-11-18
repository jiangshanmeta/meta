# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class FindElements:

    def __init__(self, root):
        # 查找是多次的，所以先dfs直接全找出来放set里
        s = set()
        self.dfs(root,0,s)
        self.set = s
            
        
    def dfs(self,root,index,s) :
        if root is None :
            return
        
        s.add(index)
        self.dfs(root.left,2*index+1,s)
        self.dfs(root.right,2*index+2,s)
        

    def find(self, target: int) -> bool:
        return target in self.set