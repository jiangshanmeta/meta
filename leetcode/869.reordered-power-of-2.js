/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    const arr = String(N).split("").sort((a,b)=>a-b);
    // 找到所有可能组合的最值
    const max = parseInt(Array.from(arr).reverse().join(""));
    if(arr[0] === "0"){
        const index = arr.findIndex((num)=>num!=='0');
        arr[0] = arr[index];
        arr[index] = "0";
    }
    const min = parseInt(arr.join(""));
    
    // 统计数量
    const numCountMap = arr.reduce((arr,item)=>{
        arr[item]++;
        return arr;
    },Array.apply(null, { length: 10 }).fill(0));
    
    const maxIndex = Math.floor(Math.log2(max));
    const minIndex = Math.ceil(Math.log(min));
    
    let base = Math.pow(2,minIndex-1);
    // 在范围内的 去尝试比较每个数字出现次数
    for(let index=minIndex;index<=maxIndex;index++){
        base *= 2;
        const curNumCountMap = String(base).split("").reduce((arr,item)=>{
            arr[item]++;
            return arr;
        },Array.apply(null, { length: 10 }).fill(0));
        
        const isEqual = numCountMap.every((num,index)=>{
            return num === curNumCountMap[index];
        });
        
        if(isEqual){
            return true;
        }
        
    }
    return false;
};