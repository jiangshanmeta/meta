CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      select * from (
                select c.Salary from (
              select a.Salary,@num:=@num+1 as Rank from (
                select distinct Salary from Employee order by Salary desc
              ) as a,(select @num:=0) as b
          ) as c where c.Rank=N
      ) as d
  );
END