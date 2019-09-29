/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // countBy
    const counts = Object.values(arr.reduce((obj,item)=>{
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    },{}));
    // 看出现的次数有没有重复的
    const map = {};
    for(let i=0;i<counts.length;i++){
        if(map[counts[i]]){
            return false;
        }
        map[counts[i]] = true;
    }
    return true;
};