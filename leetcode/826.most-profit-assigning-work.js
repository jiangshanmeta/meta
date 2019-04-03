/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    // 混合难度和收益 并按照难度排序
    const difficultProfit = difficulty.map((difficulty,index)=>{
        return {
            difficulty,
            profit:profit[index],
        };
    }).sort((a,b)=>a.difficulty-b.difficulty);
    // 工人按照能完成的难度排序
    worker.sort((a,b)=>a-b);
    let result = 0;
    let maxProfit = 0;
    let index = 0;
    for(let i=0;i<worker.length;i++){
        // 找到这个工人能完成工作的收益最大值
        while(index<difficultProfit.length && difficultProfit[index].difficulty<=worker[i]){
            maxProfit = Math.max(maxProfit,difficultProfit[index].profit);
            index++;
        }
        result += maxProfit;
    }
    
    return result;
};