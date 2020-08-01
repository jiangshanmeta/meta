/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const list = startTime.map((st,index)=>{
        return {
           startTime:startTime[index],
            endTime:endTime[index],
            profit:profit[index],
        };
    }).sort((a,b)=>a.startTime-b.startTime);
    
    const result = new Array(startTime.length);
    for(let i=0;i<list.length;i++){
        const startTime = list[i].startTime;
        let max = 0;
        for(let j=i-1;j>-1;j--){
            if(list[j].endTime<=startTime){
                max = Math.max(max,result[j]);
            }
        }
        result[i] = max+list[i].profit;
    }
    
    return Math.max(...result);
};