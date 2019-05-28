# Write your MySQL query statement below
# https://stackoverflow.com/questions/45494/mysql-error-1093-cant-specify-target-table-for-update-in-from-clause
delete from Person where Id in (
    select Id from (
        select b.Id from Person as a join Person as b on a.Email=b.Email and a.Id<b.Id
    ) as c
    
);