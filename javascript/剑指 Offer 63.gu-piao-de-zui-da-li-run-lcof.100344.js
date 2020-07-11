/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0){
        return 0;
    }
    const max = [prices[0]];
    const min = [prices[0]];
    for(let i=1;i<prices.length;i++){
        const price = prices[i];
        if(price>max[max.length-1]){
            max[max.length-1] = price;
        }else if(price<min[min.length-1]){
            max.push(price);
            min.push(price);
        }
    }
    let result = 0;
    for(let i=0;i<max.length;i++){
        result = Math.max(result,max[i]-min[i])
    }
    return result;
};