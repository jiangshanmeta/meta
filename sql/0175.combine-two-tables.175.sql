# Write your MySQL query statement below
select
    a.FirstName,a.LastName,b.City,b.State
from Person as a left join Address as b on a.PersonId=b.PersonId;