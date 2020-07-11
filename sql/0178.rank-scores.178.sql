# Write your MySQL query statement below

select s.Score,c.Rank from (
    select Score from Scores order by Score desc
) as s join (
    select a.Score,@num:=@num+1 as Rank from (
        select distinct Score from Scores order by Score desc
    ) as a,(select @num:=0) as b

) as c on s.Score=c.Score;
