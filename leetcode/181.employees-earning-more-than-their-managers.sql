# Write your MySQL query statement below
select a.name as Employee from Employee a join Employee b on a.ManagerId=b.Id where a.Salary>b.Salary;