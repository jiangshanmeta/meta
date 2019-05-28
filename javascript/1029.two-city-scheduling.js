/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // 按照（到B的费用-到A的费用）从小到大排序
    // 排序后靠前的元素到B更合理 靠后的元素到A更合理
    for(let i=0;i<costs.length;i++){
        costs[i].push(costs[i][1]-costs[i][0]);
    }
    costs.sort((a,b)=>a[2]-b[2]);
 
    let result = 0;
    const N = costs.length/2;
    for(let i=0;i<N;i++){
        result += costs[i][1];
    }
    for(let i=N;i<costs.length;i++){
        result += costs[i][0];
    }
    
    return result;
};