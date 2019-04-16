# Write your MySQL query statement below
select a.Id from 
    Weather as a join Weather as b on DATEDIFF(a.RecordDate,b.RecordDate)=1 and a.Temperature>b.Temperature;