/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let maxCount = 1;
    let maxNumber;
    // 统计次数及起始位置
    const groupByNum = nums.reduce((obj,num,index)=>{
        if(!obj[num]){
            obj[num] = {
                count:1,
                minIndex:index,
                maxIndex:index,
            }
        }else{
            obj[num].count++;
            if(obj[num].count>maxCount){
                maxCount = obj[num].count;
                maxNumber = [num];
            }else if(obj[num].count === maxCount){
                maxNumber.push(num);
            }
            obj[num].maxIndex = index;
        }
        
        return obj;
    },{});
    

    if(maxCount === 1){
        return 1;
    }
    // 找距离最小的那个
    let min = Infinity;
    for(let i=0;i<maxNumber.length;i++){
        const num = maxNumber[i];
        const dis = groupByNum[num].maxIndex-groupByNum[num].minIndex+1;
        console.log(dis)
        if(dis<min){
            min = dis;
        }
        
    }
    
    return min
};