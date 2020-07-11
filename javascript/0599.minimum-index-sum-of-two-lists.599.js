/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // 对于list1 value=>index map 便于快速索引
    const list1Map = list1.reduce((obj,item,index)=>{
        obj[item] = index;
        return obj;
    },{});
    
    let lastSum = Infinity;
    let result = [];
    
    for(let i=0;i<list2.length;i++){
        // 太大了 根本不用看
        if(i>lastSum){
            break;
        }
        const restaurant2 = list2[i];
        const index1 = list1Map[restaurant2];
        // 筛都有的
        if(index1 === undefined){
            continue;
        }
        const curSum = index1+i;
        if(curSum>lastSum){
            continue;
        }
        // 索引和更小
        if(curSum<lastSum){
            lastSum = curSum;
            result = [restaurant2];
            
        }else{
            // 索引和相同 加入数组
            result.push(restaurant2);
        }
        
    }
    
    return result;
};