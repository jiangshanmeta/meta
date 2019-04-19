# Write your MySQL query statement below
update salary 
set sex = case sex
    when 'm' then 'f'
    else 'm'
end;