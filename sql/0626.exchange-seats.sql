# Write your MySQL query statement below
select a.id,IFNULL(b.student,a.student) as student from seat as a left join seat as b on a.id = (b.id-1+(b.id&1)*2) order by id asc;