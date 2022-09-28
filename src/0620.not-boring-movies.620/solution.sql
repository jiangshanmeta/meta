# Write your MySQL query statement below
select id,movie,description,rating from cinema
    where id&1 and description!='boring' 
    order by rating desc;