/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = new Array(nums.length).fill(0);
    const sortedNumsWithIndex = nums.map((num,index)=>{
        return {
            num,
            index,
        };
    }).sort((a,b)=>a.num-b.num);

    let duplicateCount = 1;
    let rank = 0;
    for(let i=1;i<sortedNumsWithIndex.length;i++){
        if(sortedNumsWithIndex[i].num !== sortedNumsWithIndex[i-1].num){
            rank += duplicateCount;
            duplicateCount = 1;
        }else{
            duplicateCount++;
        }
        result[sortedNumsWithIndex[i].index] = rank;
    }
    return result;
};