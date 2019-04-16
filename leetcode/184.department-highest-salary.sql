# Write your MySQL query statement below


select d.Name as Department,c.Name as Employee,c.Salary   from (
    select a.Name,a.DepartmentId,a.Salary from Employee as a join (
        select DepartmentId,max(Salary) as maxSalary from Employee group by DepartmentId
    ) as b on a.DepartmentId=b.DepartmentId and a.Salary=b.maxSalary
) as c join Department as d on c.DepartmentId=d.Id;