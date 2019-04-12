"""
# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates
"""
# 就是个DFS 之所以用py是因为不支持javascript
class Solution:
    def getImportance(self, employees, id):
        """
        :type employees: Employee
        :type id: int
        :rtype: int
        """
        dict = {}
        for employee in employees:
            dict[employee.id] = employee
            
        self.dict = dict
        
        return self.dfs(id)
        
    def dfs(self,id):
        node = self.dict[id]
        value = node.importance
        for employee in node.subordinates :
            value += self.dfs(employee)
            
        return value
        
        